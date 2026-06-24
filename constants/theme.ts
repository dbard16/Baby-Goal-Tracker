export const colors = {
  // Brand
  primary: '#7C6CF6',
  primaryLight: '#F0EEFF',
  primaryDark: '#5A4ED1',

  // Warm accent
  accent: '#FF8C69',
  accentLight: '#FFF3EE',

  // Semantic
  success: '#22C55E',
  successLight: '#DCFCE7',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  danger: '#EF4444',
  dangerLight: '#FEE2E2',

  // Neutral
  background: '#FAFBFF',
  surface: '#FFFFFF',
  textPrimary: '#1A1B2E',
  textSecondary: '#5C5F7A',
  textMuted: '#9CA3AF',
  border: '#EAEBF4',
  divider: '#F3F4F6',
};

// Per developmental domain
export const domainColors = {
  social_emotional: { bg: '#FFF3EE', text: '#C2440E', border: '#FECDAA' },
  language_communication: { bg: '#DCFCE7', text: '#15803D', border: '#86EFAC' },
  cognitive: { bg: '#F0EEFF', text: '#5A4ED1', border: '#C4B5FD' },
  movement_physical: { bg: '#E0F2FE', text: '#0369A1', border: '#7DD3FC' },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 9999,
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
  xxxl: 36,
};

export const shadows = {
  sm: {
    shadowColor: '#7C6CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  md: {
    shadowColor: '#1A1B2E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  lg: {
    shadowColor: '#1A1B2E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 8,
  },
};

export const DISCLAIMER =
  'Every child develops at their own pace. These milestones are general guidelines from the CDC and AAP — not a strict checklist. Always talk to your pediatrician with any concerns.';
