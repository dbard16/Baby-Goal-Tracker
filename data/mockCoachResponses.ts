// Canned coach replies for dev/demo mode — lets you iterate on the chat UI
// without spending Anthropic API credits. Triggered automatically when
// EXPO_PUBLIC_ANTHROPIC_API_KEY is unset/placeholder, or EXPO_PUBLIC_MOCK_COACH=true.

const SCENARIOS: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['tummy time', 'tummy'],
    reply:
      "Tummy time can be tough at first — that's really common. Try short 2-3 minute sessions right after a diaper change, a few times a day, and get down on the floor at eye level to encourage them to lift their head. According to the CDC's \"Learn the Signs. Act Early.\" guidelines, most babies build up tolerance gradually over a few weeks, so short and frequent beats long and rare. Every baby develops at their own pace — as long as you're seeing small improvements, you're on the right track.",
  },
  {
    keywords: ['roll', 'rolling'],
    reply:
      "Rolling is one of those milestones with a wide normal range — CDC guidance puts it anywhere in a multi-month window, so if you're within that range there's nothing to worry about. Try placing a favorite toy just out of reach to one side during tummy time; that gentle reach-and-twist is often what triggers the first roll. Every child develops at their own pace, so try not to compare too much to other babies.",
  },
  {
    keywords: ['sleep', 'nap', 'night'],
    reply:
      "Sleep is one of the most common things parents ask me about! Developmentally, sleep patterns vary a lot at this age — there's no single 'right' schedule. A consistent wind-down routine (dim lights, same order of steps each night) tends to help more than any specific bedtime. If sleep is affecting your family's wellbeing day to day, it's always fair to bring it up with your pediatrician too.",
  },
  {
    keywords: ['talk', 'words', 'language', 'speech'],
    reply:
      "Language development is a great thing to nurture early. Narrating what you're doing throughout the day — even mundane stuff like 'now we're putting on socks' — builds vocabulary long before a child can respond. The CDC and ZERO TO THREE both emphasize back-and-forth interaction (even babbling counts!) as one of the strongest predictors of later language skills.",
  },
  {
    keywords: ['worried', 'behind', 'concerned', 'normal'],
    reply:
      "I hear that concern, and it's a really common one — thank you for bringing it up rather than sitting with it. Every child develops at their own pace, and most of what feels like 'behind' is actually well within the typical range. That said, you know your child best — if something continues to feel off to you, it's always reasonable to mention it at your next pediatrician visit. They can offer a screening if it would give you peace of mind.",
  },
];

const FALLBACKS = [
  "That's a great question. Every child develops at their own pace, so try not to worry too much about comparing to a strict timeline — the CDC and AAP guidelines are meant as general markers, not a checklist. Is there a specific activity you'd like to try this week?",
  "Thanks for sharing that. Development in this window can look really different from one child to the next. One thing that tends to help across the board is simple, playful repetition — a few minutes a day of the same activity often makes a bigger difference than one long session.",
  "Good to know — I'll keep that in mind as we chat. Based on where your little one is developmentally right now, a short, low-pressure activity a few times a day is usually the best place to start. Want a suggestion?",
];

export function getMockCoachReply(userMessage: string, childName: string): string {
  const lower = userMessage.toLowerCase();
  const matched = SCENARIOS.find((s) => s.keywords.some((kw) => lower.includes(kw)));
  const reply = matched
    ? matched.reply
    : FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
  return `[dev mode — mock reply]\n\n${reply.replace(/\byour (child|little one)\b/i, childName)}`;
}
