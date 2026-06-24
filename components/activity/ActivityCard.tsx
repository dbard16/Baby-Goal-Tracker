import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Activity } from '../../types';
import { colors, spacing, fontSizes, radius, shadows } from '../../constants/theme';

const SOURCE_COLORS: Record<string, { bg: string; text: string }> = {
  'Pathways.org': { bg: '#EDE9FE', text: '#5A4ED1' },
  'ZERO TO THREE': { bg: '#FFF3EE', text: '#C2440E' },
  'AAP': { bg: '#DCFCE7', text: '#15803D' },
};

interface Props {
  activity: Activity;
}

export function ActivityCard({ activity }: Props) {
  const [expanded, setExpanded] = useState(false);
  const sourceColor = SOURCE_COLORS[activity.source] ?? { bg: colors.background, text: colors.textSecondary };

  return (
    <TouchableOpacity
      style={[styles.card, shadows.sm]}
      onPress={() => setExpanded((e) => !e)}
      activeOpacity={0.85}
    >
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🎯</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>{activity.title}</Text>
          <Text style={styles.description} numberOfLines={expanded ? undefined : 2}>
            {activity.description}
          </Text>
          <View style={[styles.sourceTag, { backgroundColor: sourceColor.bg }]}>
            <Text style={[styles.sourceText, { color: sourceColor.text }]}>{activity.source}</Text>
          </View>
        </View>
        <View style={styles.chevron}>
          <Text style={styles.chevronText}>{expanded ? '▲' : '▼'}</Text>
        </View>
      </View>

      {expanded && (
        <View style={styles.expanded}>
          <View style={styles.howToBox}>
            <Text style={styles.howToLabel}>How to do it</Text>
            <Text style={styles.howTo}>{activity.howTo}</Text>
          </View>

          {activity.materials && activity.materials.length > 0 && (
            <View style={styles.materials}>
              <Text style={styles.materialsLabel}>You'll need</Text>
              {activity.materials.map((m, i) => (
                <View key={i} style={styles.materialRow}>
                  <Text style={styles.materialDot}>·</Text>
                  <Text style={styles.material}>{m}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  row: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  icon: { fontSize: 20 },
  middle: { flex: 1 },
  title: { fontSize: fontSizes.md, fontWeight: '700', color: colors.textPrimary, marginBottom: 4 },
  description: { fontSize: fontSizes.sm, color: colors.textSecondary, lineHeight: 20, marginBottom: spacing.sm },
  sourceTag: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  sourceText: { fontSize: fontSizes.xs, fontWeight: '700' },
  chevron: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  chevronText: { fontSize: fontSizes.xs, color: colors.textMuted },
  expanded: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    gap: spacing.md,
  },
  howToBox: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  howToLabel: {
    fontSize: fontSizes.xs,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: spacing.xs,
  },
  howTo: { fontSize: fontSizes.sm, color: colors.textPrimary, lineHeight: 22 },
  materials: {},
  materialsLabel: {
    fontSize: fontSizes.xs,
    fontWeight: '700',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: spacing.xs,
  },
  materialRow: { flexDirection: 'row', gap: spacing.xs, marginBottom: 4 },
  materialDot: { color: colors.textMuted, fontSize: fontSizes.md },
  material: { fontSize: fontSizes.sm, color: colors.textSecondary, lineHeight: 20, flex: 1 },
});
