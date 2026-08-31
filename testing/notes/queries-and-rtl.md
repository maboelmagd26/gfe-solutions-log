# RTL Queries & Accessibility

## Query priority

| Priority | Query                                                | Notes                                  |
| -------- | :--------------------------------------------------: | -------------------------------------- |
| 1        | `getByRole('button', { name: /save/i })`             | Default choice; also verifies a11y     |
| 2        | `getByLabelText(/email/i)`                           | Form fields                            |
| 3        | `getByPlaceholderText`, `getByText`, `getByDisplayValue` | When role or label is missing      |
| 4        | `getByTestId('vessel-row')`                          | Escape hatch only — invisible to users |

## Accessible name

The **accessible name** can be:

- the text content of the element,
- the **aria-label** (e.g. for icons),
- or the text of the element whose `id` matches the **aria-labelledby** attribute (e.g. for an icon button).

## Screen methods

- **getBy** — assert presence; throws an error if the element is absent.
- **queryBy** — assert absence; returns `null` when the element is not in the document.
- **findBy** — async; awaits (retries) until the element appears or times out.
- **…AllBy** — for multiple appearances.

## Accessibility tooling

- You can see the accessibility tree (**role**, **keyboard focus**, **name**) in the Elements tab in Chrome DevTools.
- You can import **logRoles** from testing-library, or call **`screen.logTestingPlaygroundURL()`** to let the library suggest the best queries.
- Browser extensions: **a11y insights** or **axe DevTools**.
