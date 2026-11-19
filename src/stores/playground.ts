import { atom, computed } from 'nanostores';

export const colors = ['blue', 'purple', 'green'] as const;
export type Accent = (typeof colors)[number];

export const count = atom(0);
export const message = atom('Hello islands');
export const accent = atom<Accent>('blue');
export const lastChange = atom('No changes yet. Try any card.');

export const summary = computed(
  [count, message],
  (value, text) =>
    `${text || '(empty message)'} · count ${value} · doubled ${value * 2}`,
);

export function changeCount(amount: number, framework: string) {
  count.set(count.get() + amount);
  lastChange.set(`Counter updated by ${framework}`);
}

export function changeMessage(text: string, framework: string) {
  message.set(text);
  lastChange.set(`Message updated by ${framework}`);
}

export function changeAccent(color: Accent, framework: string) {
  accent.set(color);
  lastChange.set(`Accent updated by ${framework}`);
}

export function reset() {
  count.set(0);
  message.set('Hello islands');
  accent.set('blue');
  lastChange.set('State reset by Astro');
}
