import type { Activity } from '../types';

// Sources: Pathways.org, ZERO TO THREE (zerotothree.org), AAP HealthyChildren.org
export const activities: Activity[] = [
  // ── 2-month milestone activities ──────────────────────────────────────────
  {
    id: 'act-2-1', milestoneId: 'mv-2-1', ageRangeMonths: [0, 3],
    title: 'Tummy Time',
    description: 'Builds neck and shoulder strength needed for rolling and crawling.',
    howTo: 'Place baby on their tummy on a firm, flat surface for 2–3 minutes, 2–3 times a day. Get on the floor face-to-face and make silly faces or use a small mirror to keep them engaged.',
    source: 'Pathways.org',
  },
  {
    id: 'act-2-2', milestoneId: 'lc-2-1', ageRangeMonths: [0, 3],
    title: 'Talk Back',
    description: 'Encourages early sound-making and turn-taking in conversation.',
    howTo: 'When your baby coos or makes sounds, pause and wait, then mimic their sound back to them. Pause again. This back-and-forth is baby\'s first "conversation."',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-2-3', milestoneId: 'sm-2-2', ageRangeMonths: [0, 3],
    title: 'Face Time (Real Face)',
    description: 'Supports social bonding and visual tracking.',
    howTo: 'Hold baby 8–12 inches from your face (their focal range) and slowly move your head side to side while making eye contact. Talk or sing softly.',
    source: 'AAP',
  },

  // ── 4-month milestone activities ──────────────────────────────────────────
  {
    id: 'act-4-1', milestoneId: 'mv-4-2', ageRangeMonths: [2, 5],
    title: 'Reach and Grab',
    description: 'Develops hand-eye coordination and grasping.',
    howTo: 'Dangle a high-contrast toy or ring just within reach while baby is lying on their back. Let them bat at it first, then help guide their hand to grab it.',
    source: 'Pathways.org',
  },
  {
    id: 'act-4-2', milestoneId: 'sm-4-1', ageRangeMonths: [2, 5],
    title: 'Smile Mirroring',
    description: 'Reinforces social smiling and emotional connection.',
    howTo: 'Smile big at your baby, then wait. When they smile back, immediately light up and say "You smiled!" The delay teaches them that their expressions affect yours.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-4-3', milestoneId: 'lc-4-2', ageRangeMonths: [2, 5],
    title: 'Narrate Your Day',
    description: 'Builds language and listening before words arrive.',
    howTo: 'Talk through everything you do with baby present: "Now I\'m putting on your sock — it\'s the blue one, feel how soft it is!" Tone and cadence matter more than the words at this stage.',
    source: 'AAP',
  },

  // ── 6-month milestone activities ──────────────────────────────────────────
  {
    id: 'act-6-1', milestoneId: 'mv-6-1', ageRangeMonths: [4, 7],
    title: 'Rolling Practice',
    description: 'Builds the core strength and coordination for rolling.',
    howTo: 'Place baby on their back and gently bring one knee across toward the opposite hip. Let them feel the shift in weight — over time they\'ll initiate it themselves. Use a toy on the side they\'re rolling toward.',
    source: 'Pathways.org',
  },
  {
    id: 'act-6-2', milestoneId: 'lc-6-1', ageRangeMonths: [4, 7],
    title: 'Serve and Return',
    description: 'Builds back-and-forth communication, the foundation of language.',
    howTo: 'When baby makes a sound or points at something, respond directly: "Oh, you see the dog? That\'s a dog!" Then wait. See if they respond. Every exchange is building neural pathways.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-6-3', milestoneId: 'cg-6-2', ageRangeMonths: [4, 7],
    title: 'Safe Explorer Tray',
    description: 'Encourages mouthing and sensory exploration (normal at this age).',
    howTo: 'Put 3–4 safe household objects (wooden spoon, soft cloth, silicone spatula) on a tray. Let baby pick them up, mouth them, and swap between hands. Change the objects every few days.',
    source: 'Pathways.org',
  },

  // ── 9-month milestone activities ──────────────────────────────────────────
  {
    id: 'act-9-1', milestoneId: 'cg-9-1', ageRangeMonths: [7, 10],
    title: 'Now You See It',
    description: 'Develops object permanence — understanding things exist when hidden.',
    howTo: 'Show baby a toy, then cover it with a small blanket while they watch. Ask "Where did it go?" Let them find it. Progress to partially hiding, then fully hiding under a cup or cloth.',
    source: 'AAP',
  },
  {
    id: 'act-9-2', milestoneId: 'mv-9-2', ageRangeMonths: [7, 10],
    title: 'Cheerio Practice',
    description: 'The classic pincer grasp exercise — exactly what the 9-month checkup asks about.',
    howTo: 'Place 3–4 Cheerios (or soft pea-sized pieces of food) on the high chair tray. Let baby practice picking them up with thumb and forefinger. This is the exact skill pediatricians check.',
    source: 'Pathways.org',
  },
  {
    id: 'act-9-3', milestoneId: 'lc-9-1', ageRangeMonths: [7, 10],
    title: 'Babble Back and Forth',
    description: 'Encourages the consonant-vowel combos that lead to first words.',
    howTo: 'When baby says "bababa," say it back, then try "mamama" or "dadada." Exaggerate your mouth movements so they can watch how sounds are formed. Take turns like a conversation.',
    source: 'ZERO TO THREE',
  },

  // ── 12-month milestone activities ─────────────────────────────────────────
  {
    id: 'act-12-1', milestoneId: 'mv-12-1', ageRangeMonths: [9, 13],
    title: 'Cruise the Furniture',
    description: 'Builds the lateral stepping needed before independent walking.',
    howTo: 'Place a favorite toy just out of reach along a couch or coffee table. Baby will pull up and side-step to reach it. Make sure the furniture is stable and the floor is safe.',
    source: 'Pathways.org',
  },
  {
    id: 'act-12-2', milestoneId: 'lc-12-2', ageRangeMonths: [9, 13],
    title: 'Name What They Point At',
    description: 'Connects words to objects at the critical vocabulary-building stage.',
    howTo: 'Every time baby points at something, name it immediately and enthusiastically: "Yes! Dog! Big dog!" Then add one word more than they currently use. If they say "dog," you say "big dog."',
    source: 'AAP',
  },
  {
    id: 'act-12-3', milestoneId: 'cg-12-1', ageRangeMonths: [9, 13],
    title: 'In and Out Game',
    description: 'Builds cause-and-effect reasoning and early problem solving.',
    howTo: 'Give baby a container (bowl, cup, bucket) and a handful of small blocks or balls. Show them putting one in, then let them repeat. Then show dumping it out. They\'ll do this 50 times — that\'s learning.',
    source: 'ZERO TO THREE',
  },

  // ── 18-month milestone activities ─────────────────────────────────────────
  {
    id: 'act-18-1', milestoneId: 'lc-18-1', ageRangeMonths: [12, 20],
    title: 'Choice Talk',
    description: 'Expands vocabulary by giving toddlers real decisions.',
    howTo: 'Instead of asking open questions, offer two choices and name both: "Do you want the apple or the banana?" Hold them both up. When they point or grunt, say the word: "Apple! You want the apple."',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-18-2', milestoneId: 'lc-18-2', ageRangeMonths: [12, 20],
    title: 'Point and Name Walk',
    description: 'Encourages pointing and shared attention.',
    howTo: 'On a walk or around the house, point at things and name them. Then wait and see if your toddler points at something. When they do, immediately name what they\'re pointing at and add a comment.',
    source: 'AAP',
  },
  {
    id: 'act-18-3', milestoneId: 'cg-18-1', ageRangeMonths: [12, 20],
    title: 'Tower Time',
    description: 'Develops hand coordination, spatial reasoning, and patience.',
    howTo: 'Stack 2 blocks slowly in front of your toddler, then let them try. Don\'t stack for them — guide their hand if needed. Knock it over together and celebrate. Try to add one block at a time over days.',
    source: 'Pathways.org',
  },

  // ── 24-month milestone activities ─────────────────────────────────────────
  {
    id: 'act-24-1', milestoneId: 'lc-24-2', ageRangeMonths: [18, 26],
    title: 'Expand One Word',
    description: 'Gently stretches language from single words to 2-word phrases.',
    howTo: 'When your toddler says one word ("ball"), expand it into a short phrase: "Throw ball!" or "Big ball!" Don\'t correct them — just model the next step up naturally.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-24-2', milestoneId: 'sm-24-1', ageRangeMonths: [18, 26],
    title: 'Feelings Naming',
    description: 'Builds emotional vocabulary and empathy.',
    howTo: 'Name emotions as you see them: "You look sad. Did that fall hurt?" Use books with faces. When a character is upset, say "How does that bunny feel?" This is the foundation of emotional intelligence.',
    source: 'ZERO TO THREE',
  },

  // ── 36-month activities ───────────────────────────────────────────────────
  {
    id: 'act-36-1', milestoneId: 'lc-36-1', ageRangeMonths: [26, 40],
    title: 'Conversation Ball',
    description: 'Builds back-and-forth conversational skills.',
    howTo: 'Sit across from your toddler and roll a ball back and forth. Each time you roll it, say something ("I like dogs"). When they roll it back, wait for them to say something — anything. Keep going. The physical exchange mirrors the conversational one.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-36-2', milestoneId: 'cg-36-1', ageRangeMonths: [26, 40],
    title: 'Shape Tracing',
    description: 'Introduces drawing shapes — starting with circles.',
    howTo: 'Draw a large circle slowly while narrating "round and round." Then guide their hand around the same circle. Finally, give them the crayon and say "your turn." Don\'t correct — celebrate any circle-ish shape.',
    source: 'Pathways.org',
    materials: ['Crayons or markers', 'Large paper'],
  },
  {
    id: 'act-36-3', milestoneId: 'sm-36-2', ageRangeMonths: [26, 40],
    title: 'Parallel Playdate',
    description: 'Eases toddlers into playing alongside other children.',
    howTo: 'Set up the same activity (playdough, blocks, crayons) side by side for two children. Don\'t force sharing — just narrate: "Maya is building a tower. You\'re building one too!" Parallel play is a real developmental milestone before true cooperative play.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-36-4', milestoneId: 'mv-36-1', ageRangeMonths: [26, 40],
    title: 'Bead Threading',
    description: 'Develops the fine motor pincer control needed for dressing and writing.',
    howTo: 'Use large wooden beads and a thick lace with a stiff tip. Show them how to hold a bead in one hand and guide the lace through with the other. Start with just 3 beads. The satisfaction of making a necklace keeps them engaged.',
    source: 'Pathways.org',
    materials: ['Large wooden beads', 'Thick shoelace or craft lace'],
  },
  {
    id: 'act-36-5', milestoneId: 'lc-36-2', ageRangeMonths: [26, 40],
    title: 'Wonder Questions',
    description: 'Nurtures the natural why/what/where curiosity at this age.',
    howTo: 'When your child asks a question, turn it back: "Why do YOU think the sky is blue?" Even if their answer is silly, take it seriously. Then give your own answer. This models that questions lead to conversation, not just answers.',
    source: 'ZERO TO THREE',
  },

  // ── 48-month activities ───────────────────────────────────────────────────
  {
    id: 'act-48-1', milestoneId: 'sm-48-1', ageRangeMonths: [38, 52],
    title: 'Dramatic Play Kit',
    description: 'Supercharges pretend play, which builds empathy, language, and problem-solving.',
    howTo: 'Put together a simple kit: an old stethoscope, notepad, hat, apron, whatever you have. Let them choose the scenario. Follow their lead entirely — say "what should I do, Doctor?" even if they give silly instructions. Your willingness to play the patient is the whole point.',
    source: 'ZERO TO THREE',
    materials: ['Old hats, scarves, bags', 'Toy kitchen items', 'Notepad and pen'],
  },
  {
    id: 'act-48-2', milestoneId: 'cg-48-1', ageRangeMonths: [38, 52],
    title: 'Color Hunt',
    description: 'Makes color learning active and memorable.',
    howTo: 'Name a color and race to find something that color in the room. "Find something red — go!" When they find it, ask "Is that red or orange?" with genuine curiosity. Celebrate approximate answers. Build up to harder colors: teal, maroon, silver.',
    source: 'AAP',
  },
  {
    id: 'act-48-3', milestoneId: 'cg-48-2', ageRangeMonths: [38, 52],
    title: 'Draw a Person Together',
    description: 'Develops the person-drawing milestone that appears at every preschool screening.',
    howTo: 'Ask your child to draw a person. Don\'t guide or correct — just watch what they include. When they\'re done, ask "what else does this person have?" to prompt more body parts. The goal is 3+ parts, not accuracy.',
    source: 'Pathways.org',
    materials: ['Crayons', 'White paper'],
  },
  {
    id: 'act-48-4', milestoneId: 'lc-48-3', ageRangeMonths: [38, 52],
    title: 'Dinner Storytelling',
    description: 'Builds narrative ability — recounting events in sequence.',
    howTo: 'At dinner, take turns sharing "the best part of today." When your child shares, ask one follow-up question: "And then what happened?" or "How did that make you feel?" Don\'t correct the order — just show interest.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-48-5', milestoneId: 'mv-48-1', ageRangeMonths: [38, 52],
    title: 'Catching Practice',
    description: 'The 4-year checkup specifically asks if they can catch a large ball.',
    howTo: 'Stand close (3 feet) and throw a large beach ball with a gentle arc. Encourage arms-wide "basket" catching rather than hands only. Move back one step each time they succeed. This is the exact skill pediatricians check at 4 years.',
    source: 'Pathways.org',
    materials: ['Large soft ball or beach ball'],
  },

  // ── 60-month activities ───────────────────────────────────────────────────
  {
    id: 'act-60-1', milestoneId: 'cg-60-1', ageRangeMonths: [48, 65],
    title: 'Counting Everything',
    description: 'Makes counting to 10 automatic through daily repetition.',
    howTo: 'Count everything, everywhere, all the time. Stairs as you climb them. Grapes before eating. Steps to the car. The goal is 1-to-1 correspondence — one number per object. Touch each thing as you count it.',
    source: 'AAP',
  },
  {
    id: 'act-60-2', milestoneId: 'lc-60-1', ageRangeMonths: [48, 65],
    title: 'Story Retelling',
    description: 'Develops the narrative sequencing skills needed for kindergarten.',
    howTo: 'After reading a familiar book, close it and ask "what happened first?" Then "what happened next?" Let them fill in the gaps. For extra fun, get a fact wrong on purpose — "and then the bear ate the porridge!" — and see if they catch it.',
    source: 'ZERO TO THREE',
  },
  {
    id: 'act-60-3', milestoneId: 'sm-60-1', ageRangeMonths: [48, 65],
    title: 'Simple Board Games',
    description: 'Teaches turn-taking, rules, and losing gracefully — all key social skills.',
    howTo: 'Start with luck-based games (Candy Land, Chutes and Ladders) where skill doesn\'t matter. Talk through each turn: "It\'s my turn. Now it\'s your turn." When someone loses, model graceful losing yourself: "Oh, I didn\'t win this time. Want to play again?"',
    source: 'ZERO TO THREE',
    materials: ['Simple board game (Candy Land, Hi Ho Cherry-O, etc.)'],
  },
  {
    id: 'act-60-4', milestoneId: 'cg-60-3', ageRangeMonths: [48, 65],
    title: 'Name Letter Practice',
    description: 'Writing their own name is the first literacy milestone of kindergarten.',
    howTo: 'Write their name in large dotted letters. Let them trace over the dots with a crayon. Then write it again and let them copy below. Start with just the first letter if needed. Keep it to 5 minutes — quit before frustration.',
    source: 'Pathways.org',
    materials: ['Pencil or crayon', 'Lined paper or whiteboard'],
  },
  {
    id: 'act-60-5', milestoneId: 'mv-60-2', ageRangeMonths: [48, 65],
    title: 'Hopscotch',
    description: 'One-foot hopping is a specific 5-year physical milestone — and it\'s genuinely fun.',
    howTo: 'Draw a simple hopscotch grid with chalk. Demonstrate hopping on one foot first. Let them try — cheering any attempt. For children who struggle, have them hop holding your hand for balance, then gradually let go.',
    source: 'Pathways.org',
    materials: ['Sidewalk chalk', 'Outdoor space'],
  },
];

export function getActivitiesForMilestone(milestoneId: string): Activity[] {
  return activities.filter((a) => a.milestoneId === milestoneId);
}

export function getActivitiesForAge(ageMonths: number): Activity[] {
  return activities.filter(
    (a) => ageMonths >= a.ageRangeMonths[0] && ageMonths <= a.ageRangeMonths[1]
  );
}
