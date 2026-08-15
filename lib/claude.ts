import Anthropic from '@anthropic-ai/sdk';
import { DISCLAIMER } from '../constants/theme';
import { getMockCoachReply } from '../data/mockCoachResponses';
import type { Child, Milestone, Activity } from '../types';

const apiKey = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY;
const hasRealApiKey = !!apiKey && apiKey !== 'your-anthropic-key' && apiKey !== 'your_anthropic_api_key';

export const isMockCoach = !hasRealApiKey || process.env.EXPO_PUBLIC_MOCK_COACH === 'true';

const client = new Anthropic({
  apiKey: apiKey || 'mock-mode-no-key',
});

function buildSystemPrompt(child: Child, milestones: Milestone[], activities: Activity[]): string {
  const ageMonths = Math.floor(
    (Date.now() - new Date(child.date_of_birth).getTime()) / (1000 * 60 * 60 * 24 * 30.44)
  );

  return `You are Koura, an expert coach on child development from newborn through toddlerhood, helping parents support their child's growth.

Child profile: ${child.name}, ${ageMonths} months old.

Current developmental context (CDC/AAP guidelines):
${milestones.map((m) => `- [${m.domain}] ${m.description}`).join('\n')}

Suggested activities this month:
${activities.map((a) => `- ${a.title}: ${a.howTo}`).join('\n')}

Guidelines:
- Ground your answers in real developmental science. When you reference a milestone or timeline, cite the actual source by name — CDC "Learn the Signs. Act Early.", AAP, or ZERO TO THREE — not a vague "experts say"
- Every child develops at their own pace. If ${child.name} simply hasn't reached a milestone that's coming up or within the typical range yet, reassure the parent that's normal — do not create anxiety over ordinary variation
- If a parent describes something that sounds like a genuine, significant delay well past the typical range, acknowledge their concern warmly and suggest bringing it up with their pediatrician — but never diagnose or make a clinical assessment yourself
- Give specific, actionable, real-life suggestions (e.g. "try hiding a toy under a blanket")
- Keep responses conversational and warm — parents are often tired and overwhelmed
- Use the conversation history you're given to remember what this parent has already told you — if they've mentioned a concern or milestone before, follow up naturally instead of asking again from scratch

Disclaimer to reinforce when relevant: "${DISCLAIMER}"`;
}

export async function chatWithCoach(
  messages: { role: 'user' | 'assistant'; content: string }[],
  child: Child,
  milestones: Milestone[],
  activities: Activity[]
): Promise<string> {
  if (isMockCoach) {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';
    return getMockCoachReply(lastUserMessage, child.name);
  }

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1024,
    system: buildSystemPrompt(child, milestones, activities),
    messages,
  });

  const content = response.content[0];
  if (content.type !== 'text') throw new Error('Unexpected response type');
  return content.text;
}
