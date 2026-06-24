import Anthropic from '@anthropic-ai/sdk';
import { DISCLAIMER } from '../constants/theme';
import type { Child, Milestone, Activity } from '../types';

const client = new Anthropic({
  apiKey: process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY!,
});

function buildSystemPrompt(child: Child, milestones: Milestone[], activities: Activity[]): string {
  const ageMonths = Math.floor(
    (Date.now() - new Date(child.date_of_birth).getTime()) / (1000 * 60 * 60 * 24 * 30.44)
  );

  return `You are a warm, knowledgeable early childhood development coach helping parents support their child's growth.

Child profile: ${child.name}, ${ageMonths} months old.

Current developmental context (CDC/AAP guidelines):
${milestones.map((m) => `- [${m.domain}] ${m.description}`).join('\n')}

Suggested activities this month:
${activities.map((a) => `- ${a.title}: ${a.howTo}`).join('\n')}

Guidelines:
- Always reinforce that development timelines vary widely and these are guidelines, not strict benchmarks
- Give specific, actionable, real-life suggestions (e.g. "try hiding a toy under a blanket")
- Keep responses conversational and warm — parents are often tired and overwhelmed
- If a parent expresses concern about a delay, acknowledge their feelings and gently suggest discussing with their pediatrician
- Always cite your source when referencing developmental guidelines (CDC, AAP, ZERO TO THREE)
- Never diagnose or make clinical assessments

Disclaimer to reinforce when relevant: "${DISCLAIMER}"`;
}

export async function chatWithCoach(
  messages: { role: 'user' | 'assistant'; content: string }[],
  child: Child,
  milestones: Milestone[],
  activities: Activity[]
): Promise<string> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: buildSystemPrompt(child, milestones, activities),
    messages,
  });

  const content = response.content[0];
  if (content.type !== 'text') throw new Error('Unexpected response type');
  return content.text;
}
