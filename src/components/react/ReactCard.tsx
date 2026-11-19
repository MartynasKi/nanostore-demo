/** @jsxImportSource react */
import { useStore } from '@nanostores/react';
import { accent, changeAccent, changeCount, changeMessage, colors, count, message } from '../../stores/playground';

export default function ReactCard() {
  const currentCount = useStore(count);
  const currentMessage = useStore(message);
  const currentAccent = useStore(accent);

  return (
    <article className="framework-card" data-framework="React" data-accent={currentAccent}>
      <header className="card-header">
        <h2>React</h2>
        <span className="framework-badge react">React</span>
      </header>
      <p className="subscription">useStore() hook</p>
      <div className="counter">
        <button type="button" aria-label="Decrease counter" onClick={() => changeCount(-1, 'React')}>−</button>
        <output className="count" aria-label="Shared count">{currentCount}</output>
        <button type="button" aria-label="Increase counter" onClick={() => changeCount(1, 'React')}>+</button>
      </div>
      <label htmlFor="react-message">Shared message</label>
      <input id="react-message" value={currentMessage} onInput={(event) => changeMessage(event.currentTarget.value, 'React')} />
      <p className="message-preview">{currentMessage || '(empty message)'}</p>
      <div className="accent-options" role="group" aria-label="Shared accent">
        {colors.map((color) => (
          <button key={color} type="button" data-color={color} aria-label={`Use ${color} accent`} aria-pressed={currentAccent === color} onClick={() => changeAccent(color, 'React')}>
            <span className="swatch" aria-hidden="true"></span>{color}
          </button>
        ))}
      </div>
    </article>
  );
}

