# NgRx Counter

A small NgRx store on standalone Angular 22 — a place to try the store out
rather than a library to depend on.

State has two slices:

- `counter` — a number that the three actions move up, down or back to zero
- `log` — the last 24 dispatched actions, recorded by its own reducer

The UI is built as a laboratory tally counter: the count sits on odometer
digit drums that roll when it changes, and every dispatched action is printed
onto a paper tape beside the instrument.

## Running it

```
npm install
npm start
```

The dev server serves on http://localhost:4200/ and reloads on source changes.

## Build and tests

```
npm run build                 # production build
npx ng test --watch=false     # Vitest, single run
```

`npm test` runs the same tests in watch mode. The project has no lint setup.

## Versions

Angular 22, NgRx 22, TypeScript 6, Vitest 4.
