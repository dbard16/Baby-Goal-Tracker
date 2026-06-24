import { useState, useRef, useCallback } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import { useChild } from '../../lib/useChild';
import { chatWithCoach } from '../../lib/claude';
import { getMilestonesForAge } from '../../data/milestones';
import { getActivitiesForAge } from '../../data/activities';
import { supabase } from '../../lib/supabase';
import { ChatBubble } from '../../components/coach/ChatBubble';
import { colors, spacing, fontSizes, radius, shadows } from '../../constants/theme';
import type { ChatMessage } from '../../types';

const STARTERS = [
  { emoji: '🗓', text: 'What should we focus on this month?' },
  { emoji: '🎯', text: 'Give me an activity to try today.' },
  { emoji: '🤔', text: 'My baby isn\'t rolling yet — should I be worried?' },
  { emoji: '📖', text: 'What does object permanence mean?' },
];

export default function CoachScreen() {
  const { child, ageMonths } = useChild();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const listRef = useRef<FlatList>(null);

  const milestones = ageMonths ? getMilestonesForAge(ageMonths) : [];
  const activities = ageMonths ? getActivitiesForAge(ageMonths) : [];

  const sendMessage = useCallback(async (text: string) => {
    if (!child || !text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));
      const reply = await chatWithCoach(history, child, milestones, activities);

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: reply,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMsg]);

      await supabase.from('chat_messages').insert([
        { child_id: child.id, role: 'user', content: userMsg.content },
        { child_id: child.id, role: 'assistant', content: reply },
      ]);

      setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
    } catch {
      Alert.alert('Error', 'Could not reach the coach. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [child, messages, milestones, activities, loading]);

  function toggleSpeech(text: string) {
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      Speech.speak(text, {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.95,
        onDone: () => setSpeaking(false),
        onError: () => setSpeaking(false),
      });
    }
  }

  const lastAssistantMsg = [...messages].reverse().find((m) => m.role === 'assistant');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        {/* Header */}
        <LinearGradient
          colors={['#22C55E', '#7C6CF6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>AI Coach 🤱</Text>
          {child && ageMonths !== null && (
            <Text style={styles.heroSub}>{child.name} · {ageMonths} months · Ask anything</Text>
          )}
        </LinearGradient>

        {/* Chat area or starters */}
        {messages.length === 0 ? (
          <View style={styles.starters}>
            <Text style={styles.startersLabel}>Try asking...</Text>
            <View style={styles.starterGrid}>
              {STARTERS.map((s) => (
                <TouchableOpacity
                  key={s.text}
                  style={[styles.starterChip, shadows.sm]}
                  onPress={() => sendMessage(s.text)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.starterEmoji}>{s.emoji}</Text>
                  <Text style={styles.starterText}>{s.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <FlatList
            ref={listRef}
            data={messages}
            keyExtractor={(m) => m.id}
            renderItem={({ item }) => <ChatBubble message={item} />}
            contentContainerStyle={styles.list}
            onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
          />
        )}

        {/* Typing indicator */}
        {loading && (
          <View style={styles.typing}>
            <ActivityIndicator size="small" color={colors.primary} />
            <Text style={styles.typingText}>Coach is thinking...</Text>
          </View>
        )}

        {/* Voice button */}
        {lastAssistantMsg && (
          <TouchableOpacity
            style={[styles.voiceButton, speaking && styles.voiceButtonActive, shadows.sm]}
            onPress={() => toggleSpeech(lastAssistantMsg.content)}
          >
            <Text style={styles.voiceButtonText}>
              {speaking ? '⏹  Stop reading' : '🔊  Read aloud'}
            </Text>
          </TouchableOpacity>
        )}

        {/* Input row */}
        <View style={[styles.inputRow, shadows.md]}>
          <TextInput
            style={styles.input}
            placeholder="Ask your coach anything..."
            placeholderTextColor={colors.textMuted}
            value={input}
            onChangeText={setInput}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, (!input.trim() || loading) && styles.sendButtonDisabled]}
            onPress={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            activeOpacity={0.85}
          >
            <Text style={styles.sendIcon}>↑</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  hero: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  heroTitle: { fontSize: fontSizes.xl, fontWeight: '800', color: '#fff' },
  heroSub: { fontSize: fontSizes.xs, color: 'rgba(255,255,255,0.8)', marginTop: 2 },

  starters: { flex: 1, padding: spacing.lg },
  startersLabel: { fontSize: fontSizes.sm, color: colors.textMuted, marginBottom: spacing.md, fontWeight: '600' },
  starterGrid: { gap: spacing.sm },
  starterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.md,
  },
  starterEmoji: { fontSize: 20 },
  starterText: { fontSize: fontSizes.sm, color: colors.primary, fontWeight: '600', flex: 1 },

  list: { padding: spacing.lg, paddingBottom: spacing.sm },

  typing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xs,
  },
  typingText: { fontSize: fontSizes.xs, color: colors.textMuted },

  voiceButton: {
    alignSelf: 'flex-start',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  voiceButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  voiceButtonText: { fontSize: fontSizes.xs, color: colors.primary, fontWeight: '700' },

  inputRow: {
    flexDirection: 'row',
    padding: spacing.md,
    gap: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontSizes.sm,
    color: colors.textPrimary,
    maxHeight: 100,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: { backgroundColor: colors.border },
  sendIcon: { color: '#fff', fontSize: fontSizes.lg, fontWeight: '800' },
});
