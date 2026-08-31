# Learning Journey

My single home for everything I'm learning: solutions, notes, mistakes, and progress.
Markdown-first — the workflow is always:

> **Learn → solve → document → mark progress → move on.**

## Where does it go?

| I just…                                  | Put it in                                                   |
| ---------------------------------------- | ----------------------------------------------------------- |
| Solved a GFE UI challenge                | [`ui-coding/src/components/<name>/`](ui-coding/README.md)   |
| Solved a JS function challenge           | [`js-functions/<name>/`](js-functions/README.md)            |
| Learned a testing concept                | [`testing/notes/<topic>.md`](testing/README.md)             |
| Tried a testing experiment in code       | [`testing/playground/`](testing/README.md)                  |
| Learned a system design concept          | [`system-design/notes/<topic>.md`](system-design/README.md) |
| Collected a quiz question                | [`quiz-questions/<topic>.md`](quiz-questions/README.md)     |
| Made a mistake worth remembering         | The `NOTES.md` / notes file of the thing I was working on   |

Every area's `README.md` tells you exactly how to add content there, and has a
`TEMPLATE.md` to copy where one is useful.

## The five areas

| Area                                        | What it holds                                        | Progress                                        |
| ------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| [ui-coding](ui-coding/README.md)            | GFE UI challenges — runnable React app               | [PROGRESS.md](ui-coding/PROGRESS.md)            |
| [js-functions](js-functions/README.md)      | JS function challenges — solutions + tests           | [PROGRESS.md](js-functions/PROGRESS.md)         |
| [testing](testing/README.md)                | Vitest / RTL / jest-dom / MSW notes + playground app | topic checklist in its README                   |
| [system-design](system-design/README.md)    | Concepts and design exercises                        | [PROGRESS.md](system-design/PROGRESS.md)        |
| [quiz-questions](quiz-questions/README.md)  | Q&A by topic, `⭐ review` for shaky ones             | search `⭐ review`                               |

## Currently working on

- 🚧 Testing playground: loginForm tests, accordion, filterable data table
- 🚧 Star rating: keyboard support

*(update this list as focus changes)*

## Running things

One `npm install` at the root covers the whole repo.

```
npm test                  # every test in the repo (ui-coding, js-functions, testing)
npx vitest <name>         # just one thing, e.g. `npx vitest flatten`
npm run dev:ui            # UI coding app in the browser
npm run dev:playground    # testing playground app in the browser
```

## Conventions

- One folder (or one Markdown file) per piece of content, kebab-case names.
- Each solution folder carries exactly one doc: `NOTES.md`, starting with a `# Title`.
- Progress lives in each area's `PROGRESS.md` — a plain table, updated by hand in seconds.
- Fill templates only as much as is useful; skip sections freely.

> **Future:** this content is the source of truth for a personal learning
> web app (routes like `/js-functions/flatten` from each content folder).
> That's why folders are kebab-case and each one is self-contained
> (code + tests + one `NOTES.md`). Nothing else here anticipates the app.
