import type { Milestone } from '../types';

// Source: CDC "Learn the Signs. Act Early." — https://www.cdc.gov/ncbddd/actearly/
// Source: AAP HealthyChildren.org developmental surveillance guidelines
export const milestones: Milestone[] = [
  // ── 2 months ──────────────────────────────────────────────────────────────
  {
    id: 'sm-2-1', ageMonths: 2, domain: 'social_emotional',
    description: 'Calms down when spoken to or picked up',
    source: 'CDC', warning: 'Does not calm with caregiver',
  },
  {
    id: 'sm-2-2', ageMonths: 2, domain: 'social_emotional',
    description: 'Looks at your face',
    source: 'CDC', warning: 'Does not look at faces',
  },
  {
    id: 'lc-2-1', ageMonths: 2, domain: 'language_communication',
    description: 'Makes sounds other than crying',
    source: 'CDC', warning: 'Does not coo or make sounds',
  },
  {
    id: 'lc-2-2', ageMonths: 2, domain: 'language_communication',
    description: 'Reacts to loud sounds',
    source: 'CDC', warning: 'Does not react to loud sounds',
  },
  {
    id: 'cg-2-1', ageMonths: 2, domain: 'cognitive',
    description: 'Watches you as you move',
    source: 'CDC', warning: 'Does not watch things as they move',
  },
  {
    id: 'mv-2-1', ageMonths: 2, domain: 'movement_physical',
    description: 'Holds head up when on tummy',
    source: 'CDC', warning: 'Does not hold head up during tummy time',
  },

  // ── 4 months ──────────────────────────────────────────────────────────────
  {
    id: 'sm-4-1', ageMonths: 4, domain: 'social_emotional',
    description: 'Smiles on their own to get your attention',
    source: 'CDC', warning: 'Does not smile on their own',
  },
  {
    id: 'sm-4-2', ageMonths: 4, domain: 'social_emotional',
    description: 'Chuckles (not yet a full laugh) when made happy',
    source: 'CDC', warning: 'Does not chuckle or make sounds of joy',
  },
  {
    id: 'lc-4-1', ageMonths: 4, domain: 'language_communication',
    description: 'Makes sounds like "oooo" and "aahh" (cooing)',
    source: 'CDC', warning: 'Does not coo or make sounds',
  },
  {
    id: 'lc-4-2', ageMonths: 4, domain: 'language_communication',
    description: 'Makes sounds back when you talk to them',
    source: 'CDC', warning: 'Does not make sounds back when talked to',
  },
  {
    id: 'cg-4-1', ageMonths: 4, domain: 'cognitive',
    description: 'If hungry, shows you they want to eat by opening mouth, rooting, or moving hands to mouth',
    source: 'CDC', warning: 'Does not show hunger cues',
  },
  {
    id: 'mv-4-1', ageMonths: 4, domain: 'movement_physical',
    description: 'Holds head steady without support when you are holding them',
    source: 'CDC', warning: 'Does not hold head steady',
  },
  {
    id: 'mv-4-2', ageMonths: 4, domain: 'movement_physical',
    description: 'Holds a toy when you put it in their hands',
    source: 'CDC', warning: 'Does not hold objects',
  },

  // ── 6 months ──────────────────────────────────────────────────────────────
  {
    id: 'sm-6-1', ageMonths: 6, domain: 'social_emotional',
    description: 'Knows familiar people',
    source: 'CDC', warning: 'Does not recognize familiar faces',
  },
  {
    id: 'sm-6-2', ageMonths: 6, domain: 'social_emotional',
    description: 'Likes to look at self in mirror',
    source: 'CDC', warning: 'Does not show enjoyment or social engagement',
  },
  {
    id: 'lc-6-1', ageMonths: 6, domain: 'language_communication',
    description: 'Takes turns making sounds with you',
    source: 'CDC', warning: 'Does not try to make sounds back when talked to',
  },
  {
    id: 'lc-6-2', ageMonths: 6, domain: 'language_communication',
    description: 'Blows "raspberries" (sticks out tongue and blows)',
    source: 'CDC', warning: 'Does not babble',
  },
  {
    id: 'cg-6-1', ageMonths: 6, domain: 'cognitive',
    description: 'Looks around at things nearby',
    source: 'CDC', warning: 'Does not look around nearby environment',
  },
  {
    id: 'cg-6-2', ageMonths: 6, domain: 'cognitive',
    description: 'Brings things to mouth',
    source: 'CDC', warning: 'Does not bring objects to mouth',
  },
  {
    id: 'mv-6-1', ageMonths: 6, domain: 'movement_physical',
    description: 'Rolls from tummy to back',
    source: 'CDC', warning: 'Does not roll over in either direction',
  },
  {
    id: 'mv-6-2', ageMonths: 6, domain: 'movement_physical',
    description: 'Pushes up with straight arms when on tummy',
    source: 'CDC', warning: 'Does not push up on arms during tummy time',
  },

  // ── 9 months ──────────────────────────────────────────────────────────────
  {
    id: 'sm-9-1', ageMonths: 9, domain: 'social_emotional',
    description: 'Is shy, clingy, or fearful around strangers',
    source: 'CDC', warning: 'Does not show different behaviors with strangers vs. familiar people',
  },
  {
    id: 'sm-9-2', ageMonths: 9, domain: 'social_emotional',
    description: 'Shows several facial expressions (happy, sad, angry, surprised)',
    source: 'CDC', warning: 'Does not show a range of facial expressions',
  },
  {
    id: 'lc-9-1', ageMonths: 9, domain: 'language_communication',
    description: 'Makes a lot of different sounds like "mamamama" and "bababababa"',
    source: 'CDC', warning: 'Does not babble with varied sounds',
  },
  {
    id: 'lc-9-2', ageMonths: 9, domain: 'language_communication',
    description: 'Lifts arms up to be picked up',
    source: 'CDC', warning: 'Does not use gestures',
  },
  {
    id: 'cg-9-1', ageMonths: 9, domain: 'cognitive',
    description: 'Looks for objects when dropped out of sight',
    source: 'CDC', warning: 'Does not look for objects when hidden',
  },
  {
    id: 'mv-9-1', ageMonths: 9, domain: 'movement_physical',
    description: 'Gets to a sitting position by themselves',
    source: 'CDC', warning: 'Does not sit without support',
  },
  {
    id: 'mv-9-2', ageMonths: 9, domain: 'movement_physical',
    description: 'Picks up things between fingers and thumb (pincer grasp)',
    source: 'CDC', warning: 'Does not pick up small objects with fingers',
  },

  // ── 12 months ─────────────────────────────────────────────────────────────
  {
    id: 'sm-12-1', ageMonths: 12, domain: 'social_emotional',
    description: 'Plays games with you, like pat-a-cake',
    source: 'CDC', warning: 'Does not engage in interactive games',
  },
  {
    id: 'lc-12-1', ageMonths: 12, domain: 'language_communication',
    description: 'Waves "bye-bye"',
    source: 'CDC', warning: 'Does not use gestures like waving',
  },
  {
    id: 'lc-12-2', ageMonths: 12, domain: 'language_communication',
    description: 'Calls a parent "mama" or "dada" or another special name',
    source: 'CDC', warning: 'Does not say "mama", "dada", or other words',
  },
  {
    id: 'cg-12-1', ageMonths: 12, domain: 'cognitive',
    description: 'Puts something in a container, like a block in a cup',
    source: 'CDC', warning: 'Does not use objects purposefully',
  },
  {
    id: 'mv-12-1', ageMonths: 12, domain: 'movement_physical',
    description: 'Pulls up to stand',
    source: 'CDC', warning: 'Does not pull up to stand',
  },
  {
    id: 'mv-12-2', ageMonths: 12, domain: 'movement_physical',
    description: 'Takes a few steps on their own',
    source: 'CDC', warning: 'Does not take steps independently',
  },

  // ── 18 months ─────────────────────────────────────────────────────────────
  {
    id: 'sm-18-1', ageMonths: 18, domain: 'social_emotional',
    description: 'Moves away from you, but looks to make sure you are close',
    source: 'CDC', warning: 'Does not use caregiver as a secure base',
  },
  {
    id: 'lc-18-1', ageMonths: 18, domain: 'language_communication',
    description: 'Says at least 3 words besides "mama" or "dada"',
    source: 'CDC', warning: 'Says fewer than 3 recognizable words',
  },
  {
    id: 'lc-18-2', ageMonths: 18, domain: 'language_communication',
    description: 'Points to show you something interesting',
    source: 'CDC', warning: 'Does not point to show things',
  },
  {
    id: 'cg-18-1', ageMonths: 18, domain: 'cognitive',
    description: 'Stacks at least 2 small objects, like blocks',
    source: 'CDC', warning: 'Does not stack objects',
  },
  {
    id: 'mv-18-1', ageMonths: 18, domain: 'movement_physical',
    description: 'Walks without holding on to anyone or anything',
    source: 'CDC', warning: 'Does not walk independently',
  },

  // ── 24 months ─────────────────────────────────────────────────────────────
  {
    id: 'sm-24-1', ageMonths: 24, domain: 'social_emotional',
    description: 'Notices when others are hurt or upset (may look sad, try to comfort)',
    source: 'CDC', warning: 'Does not notice or react to others\' distress',
  },
  {
    id: 'lc-24-1', ageMonths: 24, domain: 'language_communication',
    description: 'Says at least 50 words',
    source: 'CDC', warning: 'Says fewer than 50 words',
  },
  {
    id: 'lc-24-2', ageMonths: 24, domain: 'language_communication',
    description: 'Says 2-word sentences ("more milk", "bye mama")',
    source: 'CDC', warning: 'Does not combine 2 words',
  },
  {
    id: 'cg-24-1', ageMonths: 24, domain: 'cognitive',
    description: 'Holds something in one hand while using the other',
    source: 'CDC', warning: 'Does not use both hands cooperatively',
  },
  {
    id: 'mv-24-1', ageMonths: 24, domain: 'movement_physical',
    description: 'Kicks a ball',
    source: 'CDC', warning: 'Does not kick a ball',
  },
  {
    id: 'mv-24-2', ageMonths: 24, domain: 'movement_physical',
    description: 'Runs',
    source: 'CDC', warning: 'Does not run',
  },

  // ── 36 months (3 years) ───────────────────────────────────────────────────
  {
    id: 'sm-36-1', ageMonths: 36, domain: 'social_emotional',
    description: 'Calms down within 10 minutes after you leave (e.g. at daycare drop-off)',
    source: 'CDC', warning: 'Cannot be calmed after separation from caregiver',
  },
  {
    id: 'sm-36-2', ageMonths: 36, domain: 'social_emotional',
    description: 'Notices other children and joins them to play',
    source: 'CDC', warning: 'Does not engage with other children',
  },
  {
    id: 'lc-36-1', ageMonths: 36, domain: 'language_communication',
    description: 'Talks in conversation using 2 or more back-and-forth exchanges',
    source: 'CDC', warning: 'Does not engage in back-and-forth conversation',
  },
  {
    id: 'lc-36-2', ageMonths: 36, domain: 'language_communication',
    description: 'Asks "who," "what," "where," or "why" questions',
    source: 'CDC', warning: 'Does not ask questions',
  },
  {
    id: 'lc-36-3', ageMonths: 36, domain: 'language_communication',
    description: 'Says first name when asked',
    source: 'CDC', warning: 'Cannot state own name',
  },
  {
    id: 'cg-36-1', ageMonths: 36, domain: 'cognitive',
    description: 'Draws a circle when you show them how',
    source: 'CDC', warning: 'Cannot imitate drawing shapes',
  },
  {
    id: 'cg-36-2', ageMonths: 36, domain: 'cognitive',
    description: 'Avoids touching hot objects after warning',
    source: 'CDC', warning: 'Does not respond to safety warnings',
  },
  {
    id: 'cg-36-3', ageMonths: 36, domain: 'cognitive',
    description: 'Uses "and" to talk about two things ("a dog and a cat")',
    source: 'AAP', warning: 'Does not use connecting words in speech',
  },
  {
    id: 'mv-36-1', ageMonths: 36, domain: 'movement_physical',
    description: 'Strings items together (like large beads or macaroni)',
    source: 'CDC', warning: 'Significant difficulty with fine motor tasks',
  },
  {
    id: 'mv-36-2', ageMonths: 36, domain: 'movement_physical',
    description: 'Puts on some clothes by themselves',
    source: 'CDC', warning: 'Cannot manage any dressing independently',
  },
  {
    id: 'mv-36-3', ageMonths: 36, domain: 'movement_physical',
    description: 'Uses a fork to eat',
    source: 'CDC', warning: 'Does not use utensils',
  },

  // ── 48 months (4 years) ───────────────────────────────────────────────────
  {
    id: 'sm-48-1', ageMonths: 48, domain: 'social_emotional',
    description: 'Pretends to be something else during play (doctor, superhero, dog)',
    source: 'CDC', warning: 'Does not engage in pretend play',
  },
  {
    id: 'sm-48-2', ageMonths: 48, domain: 'social_emotional',
    description: 'Likes to help with simple chores at home',
    source: 'CDC', warning: 'Does not show interest in cooperative activities',
  },
  {
    id: 'sm-48-3', ageMonths: 48, domain: 'social_emotional',
    description: 'Changes behavior based on location (library vs. playground)',
    source: 'AAP', warning: 'Cannot adjust behavior to match the environment',
  },
  {
    id: 'lc-48-1', ageMonths: 48, domain: 'language_communication',
    description: 'Says sentences with 4 or more words',
    source: 'CDC', warning: 'Does not speak in multi-word sentences',
  },
  {
    id: 'lc-48-2', ageMonths: 48, domain: 'language_communication',
    description: 'Says some words from a song, story, or nursery rhyme',
    source: 'CDC', warning: 'Cannot recall words to familiar songs or rhymes',
  },
  {
    id: 'lc-48-3', ageMonths: 48, domain: 'language_communication',
    description: 'Talks about at least one thing that happened during their day',
    source: 'CDC', warning: 'Cannot recount recent events',
  },
  {
    id: 'cg-48-1', ageMonths: 48, domain: 'cognitive',
    description: 'Names a few colors when asked',
    source: 'CDC', warning: 'Cannot name any colors',
  },
  {
    id: 'cg-48-2', ageMonths: 48, domain: 'cognitive',
    description: 'Draws a person with 3 or more body parts',
    source: 'CDC', warning: 'Cannot draw a recognizable person',
  },
  {
    id: 'cg-48-3', ageMonths: 48, domain: 'cognitive',
    description: 'Tells what comes next in a familiar story',
    source: 'CDC', warning: 'Does not show understanding of story sequence',
  },
  {
    id: 'mv-48-1', ageMonths: 48, domain: 'movement_physical',
    description: 'Catches a large ball most of the time when thrown to them',
    source: 'CDC', warning: 'Cannot catch a ball',
  },
  {
    id: 'mv-48-2', ageMonths: 48, domain: 'movement_physical',
    description: 'Serves themselves food or pours water with adult supervision',
    source: 'CDC', warning: 'Cannot manage simple self-care tasks',
  },
  {
    id: 'mv-48-3', ageMonths: 48, domain: 'movement_physical',
    description: 'Unbuttons some buttons',
    source: 'AAP', warning: 'Struggles significantly with small fasteners',
  },

  // ── 60 months (5 years) ───────────────────────────────────────────────────
  {
    id: 'sm-60-1', ageMonths: 60, domain: 'social_emotional',
    description: 'Follows rules or takes turns when playing games with other children',
    source: 'CDC', warning: 'Cannot follow rules in structured play',
  },
  {
    id: 'sm-60-2', ageMonths: 60, domain: 'social_emotional',
    description: 'Sings, dances, or acts — shows off for you',
    source: 'CDC', warning: 'Does not engage in expressive or performative play',
  },
  {
    id: 'sm-60-3', ageMonths: 60, domain: 'social_emotional',
    description: 'Does simple chores at home (clearing plate, picking up toys)',
    source: 'AAP', warning: 'Cannot complete simple routine tasks',
  },
  {
    id: 'lc-60-1', ageMonths: 60, domain: 'language_communication',
    description: 'Tells a simple story using full sentences',
    source: 'CDC', warning: 'Cannot narrate events in sequence',
  },
  {
    id: 'lc-60-2', ageMonths: 60, domain: 'language_communication',
    description: 'Uses words about time: "yesterday," "tomorrow," "morning," "night"',
    source: 'CDC', warning: 'Does not use time-related language',
  },
  {
    id: 'lc-60-3', ageMonths: 60, domain: 'language_communication',
    description: 'Answers simple questions about a book or story',
    source: 'AAP', warning: 'Cannot respond to comprehension questions',
  },
  {
    id: 'cg-60-1', ageMonths: 60, domain: 'cognitive',
    description: 'Counts to 10',
    source: 'CDC', warning: 'Cannot count to 5',
  },
  {
    id: 'cg-60-2', ageMonths: 60, domain: 'cognitive',
    description: 'Names some numbers 1–5 when you point to them',
    source: 'CDC', warning: 'Cannot recognize written numbers',
  },
  {
    id: 'cg-60-3', ageMonths: 60, domain: 'cognitive',
    description: 'Writes some letters in their name',
    source: 'AAP', warning: 'Cannot write any letters',
  },
  {
    id: 'mv-60-1', ageMonths: 60, domain: 'movement_physical',
    description: 'Buttons some buttons independently',
    source: 'CDC', warning: 'Cannot manage buttons',
  },
  {
    id: 'mv-60-2', ageMonths: 60, domain: 'movement_physical',
    description: 'Hops on one foot',
    source: 'CDC', warning: 'Cannot balance on one foot',
  },
  {
    id: 'mv-60-3', ageMonths: 60, domain: 'movement_physical',
    description: 'Uses a fork and spoon with good control',
    source: 'AAP', warning: 'Cannot use utensils appropriately',
  },
];

export function getMilestonesForAge(ageMonths: number): Milestone[] {
  const checkpoints = [2, 4, 6, 9, 12, 18, 24, 36, 48, 60] as const;
  const nearest = checkpoints.find((c) => c >= ageMonths) ?? 60;
  return milestones.filter((m) => m.ageMonths === nearest);
}

export function getUpcomingMilestones(ageMonths: number): Milestone[] {
  const checkpoints = [2, 4, 6, 9, 12, 18, 24, 36, 48, 60] as const;
  const next = checkpoints.find((c) => c > ageMonths);
  if (!next) return [];
  return milestones.filter((m) => m.ageMonths === next);
}
