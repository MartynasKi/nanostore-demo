<script lang="ts">
  import { accent, changeAccent, changeCount, changeMessage, colors, count, message } from '../stores/playground';
</script>

<article class="framework-card" data-framework="Svelte" data-accent={$accent}>
  <header class="card-header">
    <h2>Svelte</h2>
    <span class="framework-badge svelte">Svelte</span>
  </header>
  <p class="subscription">Native $store subscription</p>
  <div class="counter">
    <button type="button" aria-label="Decrease counter" onclick={() => changeCount(-1, 'Svelte')}>−</button>
    <output class="count" aria-label="Shared count">{$count}</output>
    <button type="button" aria-label="Increase counter" onclick={() => changeCount(1, 'Svelte')}>+</button>
  </div>
  <label for="svelte-message">Shared message</label>
  <input id="svelte-message" value={$message} oninput={(event) => changeMessage(event.currentTarget.value, 'Svelte')} />
  <p class="message-preview">{$message || '(empty message)'}</p>
  <div class="accent-options" role="group" aria-label="Shared accent">
    {#each colors as color}
      <button type="button" data-color={color} aria-label={`Use ${color} accent`} aria-pressed={$accent === color} onclick={() => changeAccent(color, 'Svelte')}>
        <span class="swatch" aria-hidden="true"></span>{color}
      </button>
    {/each}
  </div>
</article>
