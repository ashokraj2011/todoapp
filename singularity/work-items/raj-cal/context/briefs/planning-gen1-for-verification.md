# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `raj-cal`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/raj-cal/artifacts/planning/plan.md`
- Source SHA-256: `40d777e88183aec11e0873c2c7e904612612392500419125518596edd50e29c3`

## Summary from “Agent brief”

Replace the Todo scaffold with a single-user React calendar built in the existing Vite application. Keep event data in application state for the current session; do not add accounts, external calendar services, recurrence, all-day events, time-zone rules, or a persistence promise. Build Month, Week, and Day views, period navigation, event create/edit/delete, and an original responsive dark presentation. Verify interactions with focused component tests and capture one completed calendar screenshot for the required human visual review. Main risks are date-boundary/navigation errors, event edits affecting the wrong date, and an incomplete or overly derivative visual treatment.

## Test strategy

Use Vitest and React Testing Library to exercise the rendered component through user-visible controls. Test view selection and date labels, previous/next/today navigation, create/edit/delete effects on the displayed date, and empty-state rendering. Run `npm test` and `npm run build`. The screenshot is captured once from the completed running app and reviewed separately; neither file presence nor a passing build substitutes for visual acceptance. Use the screenshot only as a general functional reference, not as a pixel-match target. Add `vitest`, `@testing-library/react`, `@testing-library/user-event`, and `jsdom` as development dependencies, configure the test environment in Vite, and provide the test script.

Add exactly one row per clause, using its
fully qualified ID (for example, `RAJ-CAL:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `raj-cal`'s Story evidence directory, not product source.
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
| `RAJ-CAL:AC-001` | `singularity/work-items/raj-cal/evidence/calendar-dark-theme.png` | verification: RAJ-CAL:AC-001 | evidence | A captured completed-app screenshot shows a calendar view and its original dark theme for human review; it is not a Google Calendar visual-match target. |
| `RAJ-CAL:REQ-001` | `src/App.jsx` | `src/App.test.jsx` | modified | Selecting Month, Week, or Day renders the corresponding period. |
| `RAJ-CAL:REQ-002` | `src/App.jsx` | `src/App.test.jsx` | modified | Previous/next moves by the displayed period and Today returns the display to the current date. |
| `RAJ-CAL:REQ-003` | `src/App.jsx` | `src/App.test.jsx` | modified | Creating an event for a date displays it on that date. |
| `RAJ-CAL:REQ-004` | `src/App.jsx` | `src/App.test.jsx` | modified | Editing an event updates its displayed details without changing another event. |
| `RAJ-CAL:REQ-005` | `src/App.jsx` | `src/App.test.jsx` | modified | Deleting an event removes it from the calendar. |
| `RAJ-CAL:REQ-006` | `src/App.css`, `src/index.css` | `src/App.test.jsx` | modified | Calendar uses an original dark theme and does not reproduce Google Calendar's distinctive interface or branding; visual review is covered by `RAJ-CAL:AC-001`. |

## Risks and rollback

Date arithmetic can shift labels or event placement at month/week boundaries; cover transitions with fixed test dates and align navigation and rendering on one period calculation. Event editing could update or remove the wrong entry; use stable IDs and test with multiple events. A calendar that merely resembles the supplied product too closely would violate the approved original-theme constraint; review the screenshot for independent layout, color, and branding. If a change breaks the build or behavior, revert only the affected planning-approved implementation changes while retaining the last working application; do not alter approved specification inputs. Session-only event state is an explicit limitation, not a persistence failure.
