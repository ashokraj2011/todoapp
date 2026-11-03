<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "test-101",
  "workType": "spec-driven-standard",
  "phase": "verification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "qa",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "qa"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "changeOrigins": [
      "copilot"
    ],
    "source": {
      "kind": "in-place",
      "filename": "test-evidence.md",
      "mediaType": "text/markdown",
      "sha256": "83d60a8dd3004ba1f6704c44f98f4d334ae7f4feb1a5099d68fef30ee21488f9",
      "bytes": 3687
    },
    "generation": 1,
    "publishedAt": "2026-11-03T18:15:54.863Z"
  },
  "sourceCommit": "303710d15e6f8de710d2fe4cf18c068c571698d1",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ece34bebf699bd016761306f85eb0a38c9eb13e453e52f100944569c96215590",
  "sourceSha256": "ba3d41abfff47fe1050d716eda6fb2fcc3c5a9ffe317fb2382d6d92a7e3b5071",
  "template": {
    "path": "singularity/work-items/test-101/config/wfa/blobs/sha256/fdda5ab9e701142bd6d1f12e90b85b4e24dddffb0f4f5d89c5b534bd9137e4e0",
    "sha256": "fdda5ab9e701142bd6d1f12e90b85b4e24dddffb0f4f5d89c5b534bd9137e4e0",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/verification.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/test-101/context/inputs-verification-gen1.json",
    "sha256": "0d2afb66f659cd6ee62606c9a9969b797a7262d4653f328af612e05d2805fece",
    "renderedSha256": "883113902582cb4377feaea94be2b21dbea024cff1fa82fe44570427e406d525",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/test-101/telemetry/verification-gen1.json",
      "sha256": "98b1614ee8ecdae1404a1b3f23ad1cf498223c425b57295fe9fd7f4aaa0333c7",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 39423,
        "estimatedTokens": 9856,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 39423,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-11-03T18:15:54.863Z",
      "completedAt": "2026-11-03T18:15:54.863Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# test-101 — Verification Evidence

## Agent brief

<!--
Summarize what was verified, the overall verdict, material failures or omissions, residual risk, and
release recommendation for downstream agents. Exact acceptance and negative-test evidence is
preserved separately by the governed projection.
-->

Verification passed for the focused UI suite (4/4 tests), production build, and lint on the current `test-101` checkout at `303710d15e6f8de710d2fe4cf18c068c571698d1` (source tree `sha256:873a7fe2528bae62f029cec7d51dac5e17124dd8ec7bd61fdb3fa49818ae7209`). The tests exercise display of both item types in month, week, and day views, plus create, edit, and delete flows for each type. The retained screenshot for `TEST-101:AC-001` has a valid, unchanged visual review (WIT-001). No fresh governed publication test or verification submission has been run; these local checks are diagnostic, not phase approval. Recommend proceeding to prepublish, with publication gates and human review still outstanding.

## Commands and environment

Environment: local macOS checkout, repository root `.`, package `todo-app@0.0.0`; runtime version was not recorded.

- `npm test` — exit 0; Vitest reported 1 test file and 4 tests passed (0 failures).
- `npm run build` — exit 0; Vite 8.0.8 production build completed.
- `npm run lint` — exit 0; ESLint completed without reported errors.

These are local verification runs against the checkout above. No governed publication/submission test run was performed in this phase.

## Acceptance and specification results

| Clause | Evidence and result |
|---|---|
| `TEST-101:REQ-001` | `src/App.test.jsx`, “shows Todo tasks and events in month, week, and day views” — passed. Both item types were created and found in each view. Product source: `src/App.jsx`, `@clause:TEST-101:REQ-001`. |
| `TEST-101:REQ-002` | `src/App.test.jsx`, “creates both a Todo task and a general event” — passed; both items were found in the calendar. Product source: `src/App.jsx`, `@clause:TEST-101:REQ-002`. |
| `TEST-101:REQ-003` | `src/App.test.jsx`, “edits Todo tasks and events” — passed; updated titles appeared and old titles were absent. Product source: `src/App.jsx`, `@clause:TEST-101:REQ-003`. |
| `TEST-101:REQ-004` | `src/App.test.jsx`, “deletes Todo tasks and events” — passed; both deleted titles were absent. Product source: `src/App.jsx`, `@clause:TEST-101:REQ-004`. |
| `TEST-101:AC-001` | `singularity/work-items/test-101/evidence/calendar-ui.png` — retained screenshot SHA-256 `2745d57a28572a1240df1344cbb747cd8f7b0668b3740cbe6617eeda250bcca1`. Recorded visual review WIT-001 is valid, unchanged, and marked satisfies for the `calendar-screen` slot. |

`npm run build` passed; `npm run lint` passed. Not applicable: these clauses specify user-visible behavior and screenshot evidence, not configuration or documentation outcomes.

## Negative, regression, security, and non-functional checks

No negative, empty-state, failure-state, boundary-date, accessibility, security-specific, resilience, or observability tests were run. The approved specification does not define empty/failure behavior or non-functional/security requirements; this absence is not evidence that such properties were tested. The UI suite does not explicitly exercise the existing task-completion checkbox or date-navigation controls. Persistence, recurrence, timezone guarantees, and Google Calendar synchronization remain out of scope.

Constitution articles: None: this Story pinned no constitution.

Upstream discrepancies: None identified in the approved specification, planning, and implementation inputs or the retained execution evidence.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/test-101/artifacts/specification/spec.md sha256=5eb5f4c5d9b0771bd084c5590a34b6fa87605263790dc77e460d58f5cb08d52d status=captured projection=approved-summary representation-sha256=sha256:e209be45036ed5e587bf87632f3af1e6f8c6dc2e9e499ae8d74d281465603c66 brief-sha256=e209be45036ed5e587bf87632f3af1e6f8c6dc2e9e499ae8d74d281465603c66 expansion=sfref:v1:story:test-101:b6cf2c1ca0dfbfbcf5cae591d43685bccb122da3b8241efdfea0b47fdd72b5b4 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/test-101/artifacts/specification/spec.md`
- Source SHA-256: `9c7aec4404212ee0e9fa534576f370c7b2969a43fcbf73ef91ff2449cd88f2a0`

## Summary from “Agent brief”

Add an in-app calendar to the Todo application with a Google Calendar-like interface. It shows
Todo tasks and general calendar events in month, week, and day views. A Todo app user can create,
view, edit, and delete both kinds of items. A screenshot of the completed UI is required.
Google Calendar synchronization and visual matching to an external reference are not part of the
confirmed request.

## Actors

The Todo app user views and manages Todo tasks and general calendar events in the in-app calendar.
No other roles or permission distinctions were specified.

## User scenarios

### S1 — See tasks and events in the calendar

**Priority:** P1
**Actor:** Todo app user
**Context:** The in-app calendar is available and may contain tasks, general events, or no items.

- **Given** Todo tasks and general calendar events exist
  **When** the user opens the month view
  **Then** the calendar displays both kinds of items in that view.

- **Given** Todo tasks and general calendar events exist
  **When** the user opens the week view
  **Then** the calendar displays both kinds of items in that view.

- **Given** Todo tasks and general calendar events exist
  **When** the user opens the day view
  **Then** the calendar displays both kinds of items in that view.

### S2 — Manage calendar items

**Priority:** P2
**Actor:** Todo app user
**Context:** The user is using the in-app calendar.

- **Given** the calendar is open
  **When** the user creates a Todo task or general calendar event
  **Then** the new item can be viewed in the calendar.

- **Given** a Todo task or general calendar event exists
  **When** the user edits it in the calendar
  **Then** the updated item can be viewed in the calendar.

- **Given** a Todo task or general calendar event exists
  **When** the user deletes it in the calendar
  **Then** the deleted item is no longer displayed in the calendar.

### S3 — Provide visual evidence

**Priority:** P3
**Actor:** Todo app user
**Context:** The in-app calendar UI has been completed.

- **Given** the completed calendar UI
  **When** acceptance evidence is provided
  **Then** a screenshot of the completed UI is delivered.

## Failure and empty states

- **Empty:** No special empty-state behavior or wording was specified; the request does not define
  what the calendar displays when it has no items.
- **Failure:** No failure behavior was specified. The confirmed in-app interpretation does not
  request Google Calendar synchronization or another external calendar dependency.
- **Partial:** No behavior for partially completed create, edit, or delete operations was specified.

## Permissions

The Todo app user can view and manage the two specified item types. The request defines no
additional roles, access rules, or behavior for users with different permissions.

## Boundary conditions

The required calendar views are month, week, and day. No limits, date-range rules, recurrence,
timezone behavior, or other boundary conditions were specified.

## Requirements

- The in-app calendar displays both Todo tasks and general calendar events in month, week, and day
  views. *(S1)* [TEST-101:REQ-001]
- The Todo app user can create Todo tasks and general calendar events in the in-app calendar.
  *(S2)* [TEST-101:REQ-002]
- The Todo app user can edit Todo tasks and general calendar events in the in-app calendar.
  *(S2)* [TEST-101:REQ-003]
- The Todo app user can delete Todo tasks and general calendar events in the in-app calendar.
  *(S2)* [TEST-101:REQ-004]
- A screenshot of the completed calendar UI is delivered as acceptance evidence
  [scope:SRI-35efa5d9d09b]. *(S3)* [TEST-101:AC-001]

## Non-functional requirements

No non-functional requirements were specified.

## Assumptions

The confirmed phrase “Google Calendar-like” means an in-app calendar interface, not synchronization
with Google Calendar. The requested screenshot is a final UI deliverable, not a comparison against a
reference image. The request does not settle event fields, date/time semantics, recurrence, reminders,
or persistence behavior; no requirements for those details are inferred here.

## Out of scope

Google Calendar synchronization is outside the confirmed in-app interface request. No additional
calendar features or implementation-specific visual matching are committed by the available sources.

> Exact source expansion: `sfref:v1:story:test-101:b6cf2c1ca0dfbfbcf5cae591d43685bccb122da3b8241efdfea0b47fdd72b5b4`. Use `singularity-flow show sfref:v1:story:test-101:b6cf2c1ca0dfbfbcf5cae591d43685bccb122da3b8241efdfea0b47fdd72b5b4 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/test-101/artifacts/planning/plan.md sha256=5a99f92876e08c98d0810c7258c6800a581bb6862ef03f767b762f6b2ecd72ef status=captured projection=approved-summary representation-sha256=sha256:dd4e103ed8c1e6361a7997a039a9049efbab0410a9ce86b8ab54664088ead294 brief-sha256=dd4e103ed8c1e6361a7997a039a9049efbab0410a9ce86b8ab54664088ead294 expansion=sfref:v1:story:test-101:520bb36d241939413095a5272c75ce102ef82b5ae6cdeaf258ae286c0d0f3b50 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `planning` generation 2
- Consumer: `verification`
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

> Exact source expansion: `sfref:v1:story:test-101:520bb36d241939413095a5272c75ce102ef82b5ae6cdeaf258ae286c0d0f3b50`. Use `singularity-flow show sfref:v1:story:test-101:520bb36d241939413095a5272c75ce102ef82b5ae6cdeaf258ae286c0d0f3b50 --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/test-101/artifacts/implementation/implementation-summary.md sha256=e2c0e7918f4e2537e2f0d220a66bcece813d9abc11ba607c452475cc58d2a8ce status=captured projection=approved-summary representation-sha256=sha256:c50d60590055b416c9e6220b91b5e0bee4d0d7e41d7e036b1b22577d0295b5ba brief-sha256=c50d60590055b416c9e6220b91b5e0bee4d0d7e41d7e036b1b22577d0295b5ba expansion=sfref:v1:story:test-101:932dc5aae091cc729880dc6a14a2bbfa14b9017b149128c477a12873f1b9d969 -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `implementation` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/test-101/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `e4229052c7e3ef0f40f6d43e07ea8f810134bd2e597f3ba806fdd96aebd111f0`

## Summary from “Agent brief”

Implemented a local-state calendar inside the Todo app with month, week, and day views, date navigation, and create, edit, and delete flows for Todo tasks and general events. The calendar keeps both item types visible in each applicable view and preserves the existing task completion checkbox behavior. The interface is responsive and was inspected in a local browser. Automated UI tests, the production build, and lint all pass. The screenshot is saved at the approved evidence path; human visual review remains separate. Items remain in component state and are not persisted across reloads; Google Calendar synchronization, recurrence, and unspecified time semantics remain out of scope.

## Changed components and decisions

`src/App.jsx` implements the item model, local-date navigation, all three views, and item management. Its clause comments bind the view display to `@clause:TEST-101:REQ-001`, creation to `@clause:TEST-101:REQ-002`, editing to `@clause:TEST-101:REQ-003`, and deletion to `@clause:TEST-101:REQ-004`. `src/App.css` supplies the calendar layout, responsive styles, and root overrides for the starter page defaults; `src/App.test.jsx` covers display, create, edit, and delete interactions for both item types. `package.json` and `package-lock.json` add the planned Vitest and DOM testing dependencies. No production dependency, persistence layer, migration, or external calendar integration was added. The production build and lint completed successfully.

## Tests and operational notes

`npm test` — passed, 1 test file and 4 UI tests. Coverage checks both item types in month, week, and day views and exercises create, edit, and delete interactions. `npm run build` — passed. `npm run lint` — passed. These were local development checks, not a governed publication test run. The first publication test attempt failed because the candidate did not include `vite.config.js`, leaving the DOM environment unset; the test file now declares its jsdom environment directly. The governed publication retry must establish fresh passing results. The screenshot for `TEST-101:AC-001` is saved at `singularity/work-items/test-101/evidence/calendar-ui.png`; it is evidence for human review, not a visual pass. Items are in-memory only and use local calendar dates; persistence, recurrence, and timezone guarantees are not implemented.

> Exact source expansion: `sfref:v1:story:test-101:932dc5aae091cc729880dc6a14a2bbfa14b9017b149128c477a12873f1b9d969`. Use `singularity-flow show sfref:v1:story:test-101:932dc5aae091cc729880dc6a14a2bbfa14b9017b149128c477a12873f1b9d969 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
