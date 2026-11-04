# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `google-cal`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/google-cal/artifacts/planning/plan.md`
- Source SHA-256: `5fa1dfec4b165402e89cdf05f4c918844a1feaece388241e8399f02b8652b7b2`

## Summary from “Agent brief”

Replace the Todo scaffold with a focused React month-grid calendar in `src/App.jsx` and `src/App.css`. Keep events as component state with the specified title and date fields; render the selected month, an add form, and an immediate per-event delete control. Use a date-only value consistently so rendering does not shift an event across days through UTC parsing. No persistence, recurrence, time-of-day, roles, or extra event fields are in scope. Add browser coverage in `tests/calendar.spec.js`, with the smallest required Playwright setup recorded as supporting configuration. Verify add and delete behavior in the browser, and capture the month-grid screenshot to the runner output before retaining the reviewed image at the path specified in its evidence row. The main risks are date-boundary/rendering errors and introducing test tooling into a scaffold with no existing test suite; detect these with explicit date scenarios and the configured browser run. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] [GOOGLE-CAL:AC-001]

## Test strategy

Use the configured Playwright browser run for interactive assertions; it must prove the event is rendered on the entered date and disappears immediately after deletion. Separately inspect the retained screenshot for the specified month grid, event, and visible add/delete interactions. The repository currently has no tests or browser-test dependency, so add only the configuration needed to run the planned browser suite. No retained test result or screenshot is claimed by this plan. Add exactly one row per clause, using its
fully qualified ID (for example, `GOOGLE-CAL:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `google-cal`'s Story evidence directory, not product source.
A planned test never saves its capture straight to that path, because every later run would replace
the reviewed file: it saves under its runner's output (for example `test-results/`), and the code
step copies the image to the evidence path once, when it produces the evidence.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `GOOGLE-CAL:AC-001` | `singularity/work-items/google-cal/evidence/calendar-month-grid.png` | `tests/calendar.spec.js` | evidence | Screenshot shows the month grid with an event and visible add and delete interactions. |
| `GOOGLE-CAL:REQ-001` | `src/App.jsx`; `src/App.css` | `tests/calendar.spec.js` | modified | Calendar renders the displayed month as a grid. |
| `GOOGLE-CAL:REQ-002` | `src/App.jsx` | `tests/calendar.spec.js` | modified | Submitting a non-empty title and date renders that event on the corresponding date. |
| `GOOGLE-CAL:REQ-003` | `src/App.jsx` | `tests/calendar.spec.js` | modified | Activating an event’s delete control removes it immediately without a confirmation step. |

## Risks and rollback

Date-only values can render on an adjacent day if parsed as UTC; avoid UTC conversion and include a boundary-date browser assertion. Browser-test tooling may increase install/runtime cost in this small scaffold; keep it limited to the required browser tests and use the repository lockfile. If the calendar UI or test setup destabilizes the app, revert only the planning-authorized implementation/configuration changes in the later code phase and retain the approved specification and this plan. Persistence and unspecified date/time behavior are deliberately not promised. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] [GOOGLE-CAL:AC-001]
