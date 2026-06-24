import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useChild } from '../../lib/useChild';
import { getActivitiesForAge } from '../../data/activities';
import { ActivityCard } from '../../components/activity/ActivityCard';
import { colors, spacing, fontSizes, radius } from '../../constants/theme';

export default function ActivitiesScreen() {
  const { child, ageMonths, loading } = useChild();
  const activities = ageMonths ? getActivitiesForAge(ageMonths) : [];

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={{ flex: 1 }} color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#FF8C69', '#FFB347']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>Activities</Text>
          {child && ageMonths !== null && (
            <Text style={styles.heroSub}>
              {activities.length} exercises for {child.name} right now
            </Text>
          )}
        </LinearGradient>

        <View style={styles.body}>
          {/* Sources note */}
          <View style={styles.sourcesBox}>
            <Text style={styles.sourcesTitle}>Curated from trusted sources</Text>
            <View style={styles.sourcePills}>
              {['Pathways.org', 'ZERO TO THREE', 'AAP'].map((s) => (
                <View key={s} style={styles.sourcePill}>
                  <Text style={styles.sourcePillText}>{s}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.sourcesHint}>Tap any card to see step-by-step instructions.</Text>
          </View>

          {activities.length === 0 ? (
            <View style={styles.empty}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={styles.emptyText}>No activities found for this age range.</Text>
            </View>
          ) : (
            activities.map((a) => <ActivityCard key={a.id} activity={a} />)
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
  heroSub: { fontSize: fontSizes.sm, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  body: {
    marginTop: -spacing.xl,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  sourcesBox: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  sourcesTitle: { fontSize: fontSizes.sm, fontWeight: '700', color: colors.textPrimary },
  sourcePills: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs },
  sourcePill: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  sourcePillText: { fontSize: fontSizes.xs, color: colors.primary, fontWeight: '600' },
  sourcesHint: { fontSize: fontSizes.xs, color: colors.textMuted },
  empty: { alignItems: 'center', marginTop: spacing.xxl, gap: spacing.md },
  emptyEmoji: { fontSize: 48 },
  emptyText: { color: colors.textSecondary, fontSize: fontSizes.md },
});
