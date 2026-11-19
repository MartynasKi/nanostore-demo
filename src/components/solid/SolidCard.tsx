/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { For } from 'solid-js';
import {
  accent,
  changeAccent,
  changeCount,
  changeMessage,
  colors,
  count,
  message,
} from '../../stores/playground';

export default function SolidCard() {
  const currentCount = useStore(count);
  const currentMessage = useStore(message);
  const currentAccent = useStore(accent);

  return (
    <article
      class="framework-card"
      data-framework="SolidJS"
      data-accent={currentAccent()}
    >
      <header class="card-header">
        <h2>SolidJS</h2>
        <span class="framework-badge solid">SolidJS</span>
      </header>
      <p class="subscription">useStore() accessor</p>
      <div class="counter">
        <button
          type="button"
          aria-label="Decrease counter"
          onClick={() => changeCount(-1, 'SolidJS')}
        >
          −
        </button>
        <output class="count" aria-label="Shared count">
          {currentCount()}
        </output>
        <button
          type="button"
          aria-label="Increase counter"
          onClick={() => changeCount(1, 'SolidJS')}
        >
          +
        </button>
      </div>
      <label for="solid-message">Shared message</label>
      <input
        id="solid-message"
        value={currentMessage()}
        onInput={(event) => changeMessage(event.currentTarget.value, 'SolidJS')}
      />
      <p class="message-preview">{currentMessage() || '(empty message)'}</p>
      <div class="accent-options" role="group" aria-label="Shared accent">
        <For each={colors}>
          {(color) => (
            <button
              type="button"
              data-color={color}
              aria-label={`Use ${color} accent`}
              aria-pressed={currentAccent() === color}
              onClick={() => changeAccent(color, 'SolidJS')}
            >
              <span class="swatch" aria-hidden="true"></span>
              {color}
            </button>
          )}
        </For>
      </div>
    </article>
  );
}
