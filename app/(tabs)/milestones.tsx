import { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useChild } from '../../lib/useChild';
import { supabase } from '../../lib/supabase';
import { getMilestonesForAge, getUpcomingMilestones } from '../../data/milestones';
import { MilestoneCard } from '../../components/milestone/MilestoneCard';
import { colors, spacing, fontSizes, radius, DISCLAIMER } from '../../constants/theme';
import type { MilestoneRecord } from '../../types';

export default function MilestonesScreen() {
  const { child, ageMonths, loading: childLoading, isDemoMode } = useChild();
  const [records, setRecords] = useState<Record<string, MilestoneRecord>>({});
  const [recordsLoading, setRecordsLoading] = useState(!isDemoMode);

  const currentMilestones = ageMonths ? getMilestonesForAge(ageMonths) : [];
  const upcomingMilestones = ageMonths ? getUpcomingMilestones(ageMonths) : [];

  useEffect(() => {
    if (isDemoMode || !child) return;
    supabase
      .from('milestone_records')
      .select('*')
      .eq('child_id', child.id)
      .then(({ data }) => {
        const map: Record<string, MilestoneRecord> = {};
        // Supabase returns snake_case — milestone_id is the key
        (data ?? []).forEach((r: MilestoneRecord) => { map[r.milestone_id] = r; });
        setRecords(map);
        setRecordsLoading(false);
      });
  }, [child, isDemoMode]);

  const handleStatusChange = useCallback(async (milestoneId: string, status: MilestoneRecord['status']) => {
    if (!child) return;

    setRecords((prev) => ({
      ...prev,
      [milestoneId]: {
        ...(prev[milestoneId] ?? { id: '', child_id: child.id, milestone_id: milestoneId }),
        status,
        achieved_at: status === 'achieved' ? new Date().toISOString() : null,
      } as MilestoneRecord,
    }));

    if (!isDemoMode) {
      await supabase.from('milestone_records').upsert({
        child_id: child.id,
        milestone_id: milestoneId,
        status,
        achieved_at: status === 'achieved' ? new Date().toISOString() : null,
      }, { onConflict: 'child_id,milestone_id' });
    }
  }, [child, isDemoMode]);

  if (childLoading || recordsLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={{ flex: 1 }} color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (!child || ageMonths === null) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No child profile found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const achievedCount = currentMilestones.filter((m) => records[m.id]?.status === 'achieved').length;
  const progress = currentMilestones.length > 0 ? achievedCount / currentMilestones.length : 0;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#7C6CF6', '#A78BFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>Milestones</Text>
          <Text style={styles.heroSub}>{child.name} · {ageMonths} months</Text>

          <View style={styles.progressWrap}>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>
            <Text style={styles.progressLabel}>
              {achievedCount} of {currentMilestones.length} achieved
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.body}>
          {isDemoMode && (
            <View style={styles.demoBanner}>
              <Text style={styles.demoBannerText}>🎭 Demo mode — tap milestones to try the tracking</Text>
            </View>
          )}

          <View style={styles.disclaimerBox}>
            <Text style={styles.disclaimerIcon}>💛</Text>
            <Text style={styles.disclaimerText}>{DISCLAIMER}</Text>
          </View>

          {currentMilestones.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Around {ageMonths} months</Text>
              {currentMilestones.map((m) => (
                <MilestoneCard
                  key={m.id}
                  milestone={m}
                  record={records[m.id]}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </View>
          )}

          {upcomingMilestones.length > 0 && (
            <View style={styles.section}>
              <View style={styles.upcomingHeader}>
                <Text style={styles.sectionTitle}>Coming up next ⏭</Text>
                <Text style={styles.upcomingHint}>Start practicing now — you'll be ready at the next checkup.</Text>
              </View>
              {upcomingMilestones.map((m) => (
                <MilestoneCard
                  key={m.id}
                  milestone={m}
                  record={records[m.id]}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: 48 },
  hero: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl + spacing.sm,
  },
  heroTitle: { fontSize: fontSizes.xxl, fontWeight: '800', color: '#fff' },
  heroSub: { fontSize: fontSizes.sm, color: 'rgba(255,255,255,0.75)', marginTop: 2, marginBottom: spacing.lg },
  progressWrap: { gap: spacing.xs },
  progressBg: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#fff', borderRadius: radius.full },
  progressLabel: { fontSize: fontSizes.xs, color: 'rgba(255,255,255,0.85)', fontWeight: '600' },
  body: {
    marginTop: -spacing.xl,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  demoBanner: {
    backgroundColor: '#FEF9C3',
    borderRadius: radius.lg,
    padding: spacing.sm,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#FDE047',
    alignItems: 'center',
  },
  demoBannerText: { fontSize: fontSizes.xs, color: '#854D0E', fontWeight: '600' },
  disclaimerBox: {
    flexDirection: 'row',
    gap: spacing.sm,
    backgroundColor: '#FFFBEB',
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  disclaimerIcon: { fontSize: 16 },
  disclaimerText: { flex: 1, fontSize: fontSizes.xs, color: '#92400E', lineHeight: 18 },
  section: { marginBottom: spacing.xl },
  sectionTitle: { fontSize: fontSizes.lg, fontWeight: '700', color: colors.textPrimary, marginBottom: spacing.xs },
  upcomingHeader: { marginBottom: spacing.md },
  upcomingHint: { fontSize: fontSizes.sm, color: colors.textSecondary, lineHeight: 20 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: colors.textSecondary },
});
