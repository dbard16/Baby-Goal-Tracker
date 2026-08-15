import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useChild } from '../../lib/useChild';
import { getMilestonesForAge, getUpcomingMilestones } from '../../data/milestones';
import { getActivitiesForAge } from '../../data/activities';
import { colors, spacing, fontSizes, radius, shadows, DISCLAIMER } from '../../constants/theme';
import { signOut } from '../../lib/auth';

export default function HomeScreen() {
  const { child, ageMonths, loading, isDemoMode } = useChild();
  const router = useRouter();

  const currentMilestones = ageMonths ? getMilestonesForAge(ageMonths) : [];
  const upcomingMilestones = ageMonths ? getUpcomingMilestones(ageMonths) : [];
  const activities = ageMonths ? getActivitiesForAge(ageMonths) : [];

  if (loading) return <SafeAreaView style={styles.container} />;

  if (!child) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noChild}>
          <Text style={styles.noChildEmoji}>👶</Text>
          <Text style={styles.noChildTitle}>Welcome!</Text>
          <Text style={styles.noChildText}>Add your child to get started.</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => router.push('/child/new')}>
            <Text style={styles.addButtonText}>Add a child</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const featuredActivity = activities[0];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Hero header */}
        <LinearGradient
          colors={['#7C6CF6', '#A78BFA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroTop}>
            <View>
              <Text style={styles.heroGreeting}>{getGreeting()}</Text>
              <Text style={styles.heroName}>{child.name} 👋</Text>
            </View>
            <TouchableOpacity onPress={signOut} style={styles.signOutBtn}>
              <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.agePill}>
            <Text style={styles.agePillText}>🗓 {ageMonths} months old</Text>
          </View>
          {isDemoMode && (
            <View style={styles.demoPill}>
              <Text style={styles.demoPillText}>🎭 Demo mode</Text>
            </View>
          )}
        </LinearGradient>

        <View style={styles.body}>
          {/* Stats row */}
          <View style={styles.statsRow}>
            <StatCard value={currentMilestones.length} label="milestones" emoji="📍" color={colors.primary} />
            <StatCard value={activities.length} label="activities" emoji="🎯" color="#22C55E" />
            <StatCard value={upcomingMilestones.length} label="coming up" emoji="⏭" color={colors.accent} />
          </View>

          {/* Disclaimer */}
          <View style={styles.disclaimerBox}>
            <Text style={styles.disclaimerIcon}>💛</Text>
            <Text style={styles.disclaimerText}>{DISCLAIMER}</Text>
          </View>

          {/* Today's activity */}
          {featuredActivity && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Try this today</Text>
              <TouchableOpacity
                style={styles.activityCard}
                onPress={() => router.push('/(tabs)/activities')}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={['#FF8C69', '#FFB347']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.activityCardAccent}
                />
                <View style={styles.activityCardContent}>
                  <Text style={styles.activityCardTitle}>{featuredActivity.title}</Text>
                  <Text style={styles.activityCardDesc} numberOfLines={2}>
                    {featuredActivity.description}
                  </Text>
                  <Text style={styles.activityCardSource}>via {featuredActivity.source}</Text>
                </View>
                <Text style={styles.activityCardArrow}>→</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Ask Koura CTA */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your coach</Text>
            <TouchableOpacity
              style={styles.coachCard}
              onPress={() => router.push('/(tabs)/coach')}
              activeOpacity={0.85}
            >
              <View style={styles.coachLeft}>
                <Text style={styles.coachEmoji}>🤱</Text>
                <View>
                  <Text style={styles.coachTitle}>Ask Koura</Text>
                  <Text style={styles.coachSubtitle}>
                    Activities, milestones, worries — I'm here.
                  </Text>
                </View>
              </View>
              <View style={styles.coachChevron}>
                <Text style={styles.coachChevronText}>→</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Quick nav cards */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Explore</Text>
            <View style={styles.navRow}>
              <NavCard
                emoji="📍"
                title="Milestones"
                subtitle={`${currentMilestones.length} at this stage`}
                onPress={() => router.push('/(tabs)/milestones')}
                color={colors.primaryLight}
              />
              <NavCard
                emoji="🎯"
                title="Activities"
                subtitle={`${activities.length} to try`}
                onPress={() => router.push('/(tabs)/activities')}
                color="#DCFCE7"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ value, label, emoji, color }: { value: number; label: string; emoji: string; color: string }) {
  return (
    <View style={[statStyles.card, shadows.sm]}>
      <Text style={statStyles.emoji}>{emoji}</Text>
      <Text style={[statStyles.value, { color }]}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

function NavCard({ emoji, title, subtitle, onPress, color }: {
  emoji: string; title: string; subtitle: string; onPress: () => void; color: string;
}) {
  return (
    <TouchableOpacity style={[navStyles.card, { backgroundColor: color }, shadows.sm]} onPress={onPress} activeOpacity={0.8}>
      <Text style={navStyles.emoji}>{emoji}</Text>
      <Text style={navStyles.title}>{title}</Text>
      <Text style={navStyles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning,';
  if (h < 17) return 'Good afternoon,';
  return 'Good evening,';
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: spacing.xxl },
  noChild: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing.lg },
  noChildEmoji: { fontSize: 64, marginBottom: spacing.sm },
  noChildTitle: { fontSize: fontSizes.xxl, fontWeight: '800', color: colors.textPrimary },
  noChildText: { color: colors.textSecondary, fontSize: fontSizes.md },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.sm,
  },
  addButtonText: { color: '#fff', fontWeight: '700', fontSize: fontSizes.md },

  // Hero
  hero: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl + spacing.md,
  },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  heroGreeting: { fontSize: fontSizes.sm, color: 'rgba(255,255,255,0.75)', fontWeight: '500' },
  heroName: { fontSize: fontSizes.xxxl, fontWeight: '800', color: '#fff', marginTop: 2 },
  signOutBtn: { backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: radius.full, paddingHorizontal: spacing.md, paddingVertical: spacing.xs, marginTop: spacing.xs },
  signOutText: { color: 'rgba(255,255,255,0.85)', fontSize: fontSizes.xs, fontWeight: '600' },
  agePill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginTop: spacing.lg,
  },
  agePillText: { color: '#fff', fontSize: fontSizes.sm, fontWeight: '600' },
  demoPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF9C3',
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginTop: spacing.xs,
  },
  demoPillText: { color: '#854D0E', fontSize: fontSizes.xs, fontWeight: '700' },

  // Body lifts up over the hero gradient
  body: {
    marginTop: -spacing.xl,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },

  // Stats
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },

  // Disclaimer
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
  disclaimerIcon: { fontSize: 18 },
  disclaimerText: { flex: 1, fontSize: fontSizes.xs, color: '#92400E', lineHeight: 18 },

  // Sections
  section: { marginBottom: spacing.xl },
  sectionTitle: { fontSize: fontSizes.lg, fontWeight: '700', color: colors.textPrimary, marginBottom: spacing.md },

  // Featured activity
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    ...shadows.md,
  },
  activityCardAccent: { width: 6, alignSelf: 'stretch' },
  activityCardContent: { flex: 1, padding: spacing.md, paddingLeft: spacing.md },
  activityCardTitle: { fontSize: fontSizes.md, fontWeight: '700', color: colors.textPrimary, marginBottom: 2 },
  activityCardDesc: { fontSize: fontSizes.sm, color: colors.textSecondary, lineHeight: 20, marginBottom: spacing.xs },
  activityCardSource: { fontSize: fontSizes.xs, color: colors.textMuted, fontStyle: 'italic' },
  activityCardArrow: { fontSize: fontSizes.xl, color: colors.textMuted, paddingRight: spacing.md },

  // Coach CTA
  coachCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1.5,
    borderColor: '#C4B5FD',
    ...shadows.sm,
  },
  coachLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, flex: 1 },
  coachEmoji: { fontSize: 36 },
  coachTitle: { fontSize: fontSizes.md, fontWeight: '700', color: colors.primaryDark },
  coachSubtitle: { fontSize: fontSizes.xs, color: colors.primary, marginTop: 2 },
  coachChevron: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coachChevronText: { color: '#fff', fontWeight: '700', fontSize: fontSizes.md },

  // Nav cards
  navRow: { flexDirection: 'row', gap: spacing.sm },
});

const statStyles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emoji: { fontSize: 20, marginBottom: spacing.xs },
  value: { fontSize: fontSizes.xl, fontWeight: '800', marginBottom: 2 },
  label: { fontSize: fontSizes.xs, color: colors.textSecondary, textAlign: 'center' },
});

const navStyles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },
  emoji: { fontSize: 28, marginBottom: spacing.sm },
  title: { fontSize: fontSizes.md, fontWeight: '700', color: colors.textPrimary, marginBottom: 2 },
  subtitle: { fontSize: fontSizes.xs, color: colors.textSecondary },
});
