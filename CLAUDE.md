@AGENTS.md

# Baby Goal Tracker

Expo (React Native) app — mobile-first, iOS + Android.

## What it is

A developmental coaching companion for parents of children 0–5. Three layers:
1. **Milestone tracker** — CDC/AAP-sourced developmental milestones by age checkpoint
2. **Activities** — curated, source-cited exercises tied to each milestone ("try hiding a block under a napkin")
3. **AI coach** — Claude-powered chat + voice that gives personalized, age-appropriate guidance

The core user pain point: parents reach the 6-month checkup questionnaire ("can your child pick up a Cheerio?") and realize they never knew to practice it. This app closes that gap before the appointment.

## Stack

- **Expo SDK 56 / React Native** with Expo Router (file-based)
- **Supabase** — auth (secure-store persisted), Postgres DB, future pgvector for RAG
- **Anthropic Claude** (`claude-sonnet-4-6`) — AI coach with child-context system prompt
- **expo-speech** — text-to-speech for voice coach
- **expo-av** — audio playback
- **NativeWind + Tailwind** — styling

## Project structure

```
app/
  _layout.tsx          # Root layout (providers)
  (auth)/              # Login / signup screens
  (tabs)/              # Bottom tab nav
    index.tsx          # Home dashboard
    milestones.tsx     # Milestone tracker
    activities.tsx     # Activity suggestions
    coach.tsx          # AI coach (chat + voice)
  child/[id].tsx       # Per-child profile
components/
  milestone/           # MilestoneCard, MilestoneProgress
  activity/            # ActivityCard
  coach/               # ChatBubble, VoiceButton
  ui/                  # Shared UI primitives
lib/
  supabase.ts          # Supabase client (SecureStore auth)
  claude.ts            # Anthropic client + system prompt builder
data/
  milestones.ts        # CDC milestone data (2–24mo seeded, extend to 60mo)
  activities.ts        # Activity library (Pathways.org, ZERO TO THREE, AAP)
types/index.ts         # Shared TypeScript types
constants/theme.ts     # Colors, spacing, DISCLAIMER string
```

## Key design decisions

- **DISCLAIMER constant** — surfaces on every milestone view; "every child develops at their own pace" is not optional UX, it's a legal/ethical requirement
- **Source citations always shown** — CDC, AAP, Pathways.org, ZERO TO THREE build parent trust
- **AI coach system prompt** always includes child age, current milestone context, and activity list — responses are grounded, not generic
- **Voice coach** uses expo-speech for TTS — parents often have hands full
- **No clinical assessments** — coach can suggest talking to a pediatrician but never diagnoses

## Content sources (for RAG expansion)

- CDC Learn the Signs: https://www.cdc.gov/ncbddd/actearly/
- AAP HealthyChildren: https://www.healthychildren.org/
- ZERO TO THREE: https://www.zerotothree.org/
- Pathways.org: https://pathways.org/
- ASQ screening tool (what pediatricians use at checkups)

## Env vars

See `.env.example`. Prefix all with `EXPO_PUBLIC_` for Expo to expose to the client.

## Running

```bash
npm start          # Expo dev server
npm run android    # Android emulator
npm run ios        # iOS simulator (Mac only)
```
