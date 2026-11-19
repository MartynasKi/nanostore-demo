import type { Alpine } from 'alpinejs';
import {
  accent,
  changeAccent,
  changeCount,
  changeMessage,
  count,
  message,
  type Accent,
} from './stores/playground';

export default function setupAlpine(Alpine: Alpine) {
  Alpine.data('playground', () => ({
    count: count.get(),
    message: message.get(),
    accent: accent.get(),
    subscriptions: [] as (() => void)[],

    init() {
      this.subscriptions = [
        count.subscribe((value) => {
          this.count = value;
        }),
        message.subscribe((value) => {
          this.message = value;
        }),
        accent.subscribe((value) => {
          this.accent = value;
        }),
      ];
    },

    destroy() {
      this.subscriptions.forEach((unsubscribe) => unsubscribe());
    },

    changeCount(amount: number) {
      changeCount(amount, 'AlpineJS');
    },

    changeMessage(text: string) {
      changeMessage(text, 'AlpineJS');
    },

    changeAccent(color: Accent) {
      changeAccent(color, 'AlpineJS');
    },
  }));
}
