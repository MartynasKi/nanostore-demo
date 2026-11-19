<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import {
  accent,
  changeAccent,
  changeCount,
  changeMessage,
  colors,
  count,
  message,
} from '../stores/playground';

const currentCount = useStore(count);
const currentMessage = useStore(message);
const currentAccent = useStore(accent);
</script>

<template>
  <article
    class="framework-card"
    data-framework="Vue"
    :data-accent="currentAccent"
  >
    <header class="card-header">
      <h2>Vue</h2>
      <span class="framework-badge vue">Vue</span>
    </header>
    <p class="subscription">useStore() composable</p>
    <div class="counter">
      <button
        type="button"
        aria-label="Decrease counter"
        @click="changeCount(-1, 'Vue')"
      >
        −
      </button>
      <output class="count" aria-label="Shared count">{{
        currentCount
      }}</output>
      <button
        type="button"
        aria-label="Increase counter"
        @click="changeCount(1, 'Vue')"
      >
        +
      </button>
    </div>
    <label for="vue-message">Shared message</label>
    <input
      id="vue-message"
      :value="currentMessage"
      @input="changeMessage(($event.target as HTMLInputElement).value, 'Vue')"
    />
    <p class="message-preview">{{ currentMessage || '(empty message)' }}</p>
    <div class="accent-options" role="group" aria-label="Shared accent">
      <button
        v-for="color in colors"
        :key="color"
        type="button"
        :data-color="color"
        :aria-label="`Use ${color} accent`"
        :aria-pressed="currentAccent === color"
        @click="changeAccent(color, 'Vue')"
      >
        <span class="swatch" aria-hidden="true"></span>{{ color }}
      </button>
    </div>
  </article>
</template>
