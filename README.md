# Six frameworks, one store

<img width="1452" height="821" alt="image" src="https://github.com/user-attachments/assets/0b01b53b-0c6c-462c-b91f-0044f5947540" />

A small Astro page where React, Preact, Vue, Svelte, SolidJS and AlpineJS share state through Nano Stores. Each framework has its own card with the same controls.

Demo URL: [nanostore-demo.martynaski.dev](https://nanostore-demo.martynaski.dev).

## Run locally

Use Node.js 22.23.4 or newer and pnpm 12.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Astro.

```sh
pnpm check   # Check Astro, TypeScript, Vue and Svelte
pnpm build   # Generate the static page in dist/
pnpm preview # Serve the production build locally
```

## Try it

- Type a message in Vue and watch every other input and preview update.
- Increment in Svelte or decrement in React. All six counters share the value.
- Choose an accent in AlpineJS. Every card and the Astro readout changes color.
- Watch the Astro summary derive a doubled count and report the latest change.
- Reset the playground or reload the page to restore the defaults.

State lives in the current browser page. There is no backend, persistence or synchronization between tabs.

## Read the code

`src/stores/playground.ts` holds the atoms, update functions and computed summary. All components import that same module. The components do not pass state to each other or dispatch custom browser events.

| Widget        | Subscription                                                     |
| ------------- | ---------------------------------------------------------------- |
| React         | `useStore` from `@nanostores/react`                              |
| Preact        | `useStore` from `@nanostores/preact`                             |
| Vue           | `useStore` from `@nanostores/vue`                                |
| Svelte        | Native `$store` syntax                                           |
| SolidJS       | `useStore` accessor from `@nanostores/solid`                     |
| AlpineJS      | `subscribe` inside `Alpine.data`, with cleanup in `destroy`      |
| Astro readout | `subscribe` in a browser custom element, with cleanup on removal |

The cards are deliberately separate and use plain HTML controls so you can compare each framework without a shared component abstraction. Styles live in `src/styles/global.css`.

Astro config assigns separate JSX directories to React, Preact and Solid. Each TSX file also declares its own `jsxImportSource` for type checking. Framework islands use `client:load`. Alpine starts through its official integration.

Astro templates render initial HTML. The readout reacts through a browser script because Astro template expressions do not rerun in the browser. Subscriptions read the current state when they mount, so a later island does not reset an earlier change.

TypeScript stays on version 6 because the installed Astro and Svelte checkers do not support version 7 yet. The pnpm lockfile records the installed dependency versions.

The Vite config disables React Fast Refresh to work around [Vue plugin issue #798](https://github.com/vitejs/vite-plugin-vue/issues/798). Without it, Vue's TypeScript compilation inherits React refresh settings and crashes on `useStore()` in development. This workaround does not change production behavior. React edits may require a page reload.

This project intentionally loads six framework runtimes to demonstrate interoperability. A typical Astro project can use fewer frameworks.

## Learn more

- [Nano Stores](https://github.com/nanostores/nanostores)
- [Sharing state between Astro islands](https://docs.astro.build/en/recipes/sharing-state-islands/)
- [Astro framework integrations](https://docs.astro.build/en/guides/framework-components/)
