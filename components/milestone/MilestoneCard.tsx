import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Milestone, MilestoneRecord } from '../../types';
import { colors, domainColors, spacing, fontSizes, radius, shadows } from '../../constants/theme';

const DOMAIN_LABELS: Record<Milestone['domain'], string> = {
  social_emotional: 'Social & Emotional',
  language_communication: 'Language',
  cognitive: 'Cognitive',
  movement_physical: 'Movement',
};

const DOMAIN_EMOJI: Record<Milestone['domain'], string> = {
  social_emotional: '💛',
  language_communication: '💬',
  cognitive: '🧠',
  movement_physical: '🏃',
};

const STATUS_CONFIG: Record<MilestoneRecord['status'], { label: string; bg: string; text: string; border: string }> = {
  not_started: { label: 'Not yet', bg: colors.background, text: colors.textMuted, border: colors.border },
  in_progress: { label: 'Working on it', bg: colors.primaryLight, text: colors.primary, border: '#C4B5FD' },
  achieved: { label: '✓ Achieved', bg: colors.successLight, text: colors.success, border: '#86EFAC' },
};

interface Props {
  milestone: Milestone;
  record?: MilestoneRecord;
  onStatusChange: (milestoneId: string, status: MilestoneRecord['status']) => void;
}

export function MilestoneCard({ milestone, record, onStatusChange }: Props) {
  const status = record?.status ?? 'not_started';
  const dc = domainColors[milestone.domain];
  const sc = STATUS_CONFIG[status];

  function cycleStatus() {
    const cycle: MilestoneRecord['status'][] = ['not_started', 'in_progress', 'achieved'];
    const next = cycle[(cycle.indexOf(status) + 1) % cycle.length];
    onStatusChange(milestone.id, next);
  }

  return (
    <View style={[styles.card, shadows.sm, status === 'achieved' && styles.cardAchieved]}>
      {/* Left accent bar */}
      <View style={[styles.accentBar, { backgroundColor: dc.border }]} />

      <View style={styles.content}>
        {/* Domain tag */}
        <View style={[styles.domainTag, { backgroundColor: dc.bg, borderColor: dc.border }]}>
          <Text style={styles.domainEmoji}>{DOMAIN_EMOJI[milestone.domain]}</Text>
          <Text style={[styles.domainText, { color: dc.text }]}>
            {DOMAIN_LABELS[milestone.domain]}
          </Text>
        </View>

        <Text style={[styles.description, status === 'achieved' && styles.descriptionAchieved]}>
          {milestone.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.source}>📖 {milestone.source}</Text>
          <TouchableOpacity
            style={[styles.statusBtn, { backgroundColor: sc.bg, borderColor: sc.border }]}
            onPress={cycleStatus}
            activeOpacity={0.75}
          >
            <Text style={[styles.statusText, { color: sc.text }]}>{sc.label}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  cardAchieved: { borderColor: '#86EFAC', backgroundColor: '#FAFFFE' },
  accentBar: { width: 4, borderTopLeftRadius: radius.lg, borderBottomLeftRadius: radius.lg },
  content: { flex: 1, padding: spacing.md },
  domainTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    marginBottom: spacing.sm,
  },
  domainEmoji: { fontSize: 11 },
  domainText: { fontSize: fontSizes.xs, fontWeight: '700' },
  description: {
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  descriptionAchieved: { color: colors.textSecondary },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  source: { fontSize: fontSizes.xs, color: colors.textMuted },
  statusBtn: {
    borderRadius: radius.full,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  statusText: { fontSize: fontSizes.xs, fontWeight: '700' },
});
