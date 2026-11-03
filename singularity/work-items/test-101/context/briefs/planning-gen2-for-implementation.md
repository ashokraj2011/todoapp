# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `planning` generation 2
- Consumer: `implementation`
- Source: `singularity/work-items/test-101/artifacts/planning/plan.md`
- Source SHA-256: `19c59d1ac4c0467b4f8284ff4ba379aa1f7ef13d5ba0aee720a103b14ecc9930`

## Summary from “Agent brief”

Extend the existing React Todo screen into a single in-app calendar backed by local component state. Preserve Todo items while adding general calendar events, date navigation, and month/week/day views; provide create, edit, and delete actions for each item type. Keep Google Calendar synchronization, persistence, recurrence, and unspecified date/time semantics out of scope. Prove the five functional obligations with focused UI tests and deliver the required screenshot as separate Story evidence after implementation.

## Test strategy

Add a focused UI test file and configure the existing Vite project to run it with Vitest and a DOM testing environment. Exercise both Todo and general-event data through visible user interactions, including each calendar view and each mutation. Run the focused tests and `npm run build`; these commands are verification, not substitutes for the retained screenshot. Capture the final calendar screenshot during implementation and copy it once to the Story evidence path; inspect that image as the visual proof. The screenshot is not an executable test output and must not be overwritten by later test runs.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `TEST-101:AC-001` | `singularity/work-items/test-101/evidence/calendar-ui.png` | verification: TEST-101:AC-001 | evidence | A retained screenshot shows the completed in-app calendar UI. |
| `TEST-101:REQ-001` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | Both Todo tasks and general events are visible in month, week, and day views. |
| `TEST-101:REQ-002` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can create a Todo task and a general event, and each appears in the calendar. |
| `TEST-101:REQ-003` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can edit a Todo task and a general event, and each updated item appears in the calendar. |
| `TEST-101:REQ-004` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can delete a Todo task and a general event, and neither remains displayed. |

## Risks and rollback

The existing app is a small in-memory Todo scaffold with no established test suite; introducing test tooling adds dependency and maintenance cost. Keep the test setup limited to the UI behaviors in this plan and verify it with the focused test command and production build. A shared item model or date-range calculation could omit items at view boundaries; test both item types across all three views. Because persistence and date/time semantics are unspecified, items may reset on reload and dates should use a consistent local interpretation without claiming timezone guarantees. If the calendar changes regress the existing Todo flow or cannot be verified, revert only the calendar-related UI, styling, and test-tooling changes while preserving the original Todo behavior; do not alter approved specification inputs.
