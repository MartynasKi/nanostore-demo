/** @jsxImportSource preact */
import { useStore } from '@nanostores/preact';
import {
  accent,
  changeAccent,
  changeCount,
  changeMessage,
  colors,
  count,
  message,
} from '../../stores/playground';

export default function PreactCard() {
  const currentCount = useStore(count);
  const currentMessage = useStore(message);
  const currentAccent = useStore(accent);

  return (
    <article
      className="framework-card"
      data-framework="Preact"
      data-accent={currentAccent}
    >
      <header className="card-header">
        <h2>Preact</h2>
        <span className="framework-badge preact">Preact</span>
      </header>
      <p className="subscription">useStore() hook</p>
      <div className="counter">
        <button
          type="button"
          aria-label="Decrease counter"
          onClick={() => changeCount(-1, 'Preact')}
        >
          −
        </button>
        <output className="count" aria-label="Shared count">
          {currentCount}
        </output>
        <button
          type="button"
          aria-label="Increase counter"
          onClick={() => changeCount(1, 'Preact')}
        >
          +
        </button>
      </div>
      <label for="preact-message">Shared message</label>
      <input
        id="preact-message"
        value={currentMessage}
        onInput={(event) => changeMessage(event.currentTarget.value, 'Preact')}
      />
      <p className="message-preview">{currentMessage || '(empty message)'}</p>
      <div className="accent-options" role="group" aria-label="Shared accent">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            data-color={color}
            aria-label={`Use ${color} accent`}
            aria-pressed={currentAccent === color}
            onClick={() => changeAccent(color, 'Preact')}
          >
            <span className="swatch" aria-hidden="true"></span>
            {color}
          </button>
        ))}
      </div>
    </article>
  );
}
