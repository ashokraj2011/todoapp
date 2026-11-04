<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "raj-cal",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "6bab059ddf60460a238415d7facd5ed81f7cf11ef13a16b1a15ca42ad1d4f014",
      "bytes": 3470
    },
    "generation": 1,
    "publishedAt": "2026-11-04T05:35:17.184Z"
  },
  "sourceCommit": "99e5753b4810c93a65fa15241b58ba03898b9f6a",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "65ca1cdacf1aa0210c9f149aa20f61435cfd2c30a21ff038bda7f6e13f73e4e3",
  "template": {
    "path": "singularity/work-items/raj-cal/config/wfa/blobs/sha256/2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "sha256": "2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/raj-cal/context/inputs-implementation-gen1.json",
    "sha256": "ba9997376a88aa0d3f72f1fa1011826a82daee4c0afff035317f0a7c4b6caabb",
    "renderedSha256": "5c39f66c6dd40c2fcde8a5c24207bfe5270baad9c77ff28cd546a659e37fc98a",
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
      "path": "singularity/work-items/raj-cal/telemetry/implementation-gen1.json",
      "sha256": "167df558413e75d731037400a46e8aa2c16f758290bd059469184440268fe0e8",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 34063,
        "estimatedTokens": 8516,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 34063,
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
      "startedAt": "2026-11-04T05:35:17.184Z",
      "completedAt": "2026-11-04T05:35:17.184Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# raj-cal — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

Replaced the Todo scaffold with Daymark, a responsive single-user calendar offering Month, Week, and Day views, period navigation, and event creation, editing, and deletion. Event data remains in memory for the current browser session. The implementation uses an original ink-and-plum dark presentation, and the required screenshot was captured for separate visual review. Clarification review found no material ambiguity in the approved specification and plan.

## Implemented outcome

The calendar renders a 42-day month grid, a seven-day week grid, or a single-day view. Previous/next moves by the active period, and Today returns to the current date. Events can be assigned a date and time, edited by stable ID (including changing their date), or deleted. An empty calendar keeps its selected period visible. No persistence or external calendar integration is promised.

## Changed components and decisions

| Clause | Implementation evidence |
|---|---|
| `RAJ-CAL:REQ-001` | `src/App.jsx` provides the Month/Week/Day controls and corresponding grids; bound by `@clause:RAJ-CAL:REQ-001`. |
| `RAJ-CAL:REQ-002` | `src/App.jsx` navigates by month, week, or day and returns to today; bound by `@clause:RAJ-CAL:REQ-002`. |
| `RAJ-CAL:REQ-003` | `src/App.jsx` creates a dated event from the new-event dialog; bound by `@clause:RAJ-CAL:REQ-003`. |
| `RAJ-CAL:REQ-004` | `src/App.jsx` updates the selected event by stable ID, including its date; bound by `@clause:RAJ-CAL:REQ-004`. |
| `RAJ-CAL:REQ-005` | `src/App.jsx` removes only the selected event; bound by `@clause:RAJ-CAL:REQ-005`. |
| `RAJ-CAL:REQ-006` | `src/App.css` and `src/index.css` provide an original dark palette and layout; bound by `@clause:RAJ-CAL:REQ-006` in both stylesheets. The captured visual evidence is `singularity/work-items/raj-cal/evidence/calendar-dark-theme.png`. |

`src/App.test.jsx` covers view selection, date navigation, event CRUD, empty state, and a capture-ready calendar render. `vite.config.js` configures the jsdom test environment; `package.json` and `package-lock.json` add Vitest, React Testing Library, user-event, and jsdom plus the `npm test` command. `index.html` updates the app title and theme color. No database, migrations, service integration, or persistence configuration was added.

## Constitution articles

None: this Story pinned no constitution.

## Upstream discrepancies

None identified. The approved specification and plan consistently define the calendar scope and the visual screenshot as a separate human review.

## Tests and operational notes

| Command | Result |
|---|---|
| `npm test` | Passed: 1 test file, 6 tests. Includes `@ac:RAJ-CAL:AC-001` capture-readiness coverage; this is not visual acceptance. |
| `npm run build` | Passed: Vite production build completed. |
| `npm run lint` | Passed: ESLint reported no issues. |

Captured `singularity/work-items/raj-cal/evidence/calendar-dark-theme.png` from the local application at `http://127.0.0.1:4179/`; a person must still perform the visual review for `RAJ-CAL:AC-001`. Event data is session-only. No application-service or persistence setup is required.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/raj-cal/artifacts/specification/spec.md sha256=6afb633eb22478b659c28d734b151a8b423f3977dceb7c93b9b78826d147be37 status=captured projection=approved-summary representation-sha256=sha256:7cbdbe90c23cac8619539d8550dd77a7cf3111170e3e5b38b02071a6e99c2606 brief-sha256=7cbdbe90c23cac8619539d8550dd77a7cf3111170e3e5b38b02071a6e99c2606 expansion=sfref:v1:story:raj-cal:432ea1ac6ac60f188df0edff17c25302836bcc6dbff4afa388e08fe8f602508a -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `raj-cal`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/raj-cal/artifacts/specification/spec.md`
- Source SHA-256: `33858cecde70ccc10990f5f3819cd9983bba71944ee3fe46a78d47eb29e06751`

## Summary from “Agent brief”

Specify a single-user browser calendar with Month, Week, and Day views, date navigation, and event create, edit, and delete. Use an original dark theme rather than copying Google Calendar's distinctive interface. The attached Google Calendar screenshot informs general calendar concepts but is not a visual-match target. A screenshot of the completed application is required for visual review.

## Actors

The single user views calendar dates and manages events. No separate roles or access authorities are specified.

## User scenarios

The following scenarios cover calendar browsing, event management, and visual review.

### S1 — Browse calendar dates and views

**Priority:** P1
**Actor:** Single user
**Context:** The browser calendar is open to a selected date.

- **Given** the calendar is open
  **When** the user selects Month, Week, or Day
  **Then** the calendar displays the corresponding date period.

- **Given** a calendar period is displayed
  **When** the user navigates to the previous or next period, or returns to today
  **Then** the displayed period and date label update to that selection.

### S2 — Manage personal calendar events

**Priority:** P1
**Actor:** Single user
**Context:** The calendar is open and the user may manage personal events.

- **Given** the calendar is open
  **When** the user creates an event for a date
  **Then** the event appears on that date in the calendar.

- **Given** an event is displayed
  **When** the user edits that event
  **Then** the updated event is displayed.

- **Given** an event is displayed
  **When** the user deletes that event
  **Then** the event is no longer displayed.

### S3 — Review the calendar's visual presentation

**Priority:** P1
**Actor:** Single user reviewing the application
**Context:** The completed application can display a calendar view.

- **Given** the calendar is displayed
  **When** a screenshot of the completed application is captured
  **Then** it is available for visual review of the original dark-themed calendar interface.

## Failure and empty states

- **Empty:** With no events, the selected calendar period remains visible and contains no event entries.
- **Failure:** No external calendar service or dependency is specified; behavior for an unavailable dependency is not defined by the current evidence.
- **Partial:** Partial completion behavior for event operations is not specified.

## Permissions

There is one user role. No separate permissions or reader-without-authority behavior is specified.

## Boundary conditions

No event-count, date-range, duration, or performance limits are specified. The supported calendar views are Month, Week, and Day. All-day events, recurring events, time-zone behavior, and special date-boundary rules are not in scope.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calendar UI shall provide Month, Week, and Day views. *(S1)* [RAJ-CAL:REQ-001]
- The calendar UI shall allow navigation between date periods, including returning to today. *(S1)* [RAJ-CAL:REQ-002]
- The single user shall be able to create an event, which then appears on its date in the calendar. *(S2)* [RAJ-CAL:REQ-003]
- The single user shall be able to edit an event, with the updated event displayed in the calendar. *(S2)* [RAJ-CAL:REQ-004]
- The single user shall be able to delete an event, after which it is no longer displayed. *(S2)* [RAJ-CAL:REQ-005]
- The calendar UI shall use an original dark theme and shall not copy Google Calendar's distinctive visual interface or branding. *(S3)* [RAJ-CAL:REQ-006]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the completed calendar is provided for visual review of its original dark theme and calendar view; the attached Google Calendar screenshot is a functional reference, not a visual-match target. [scope:SRI-35efa5d9d09b] *(S3)* [RAJ-CAL:AC-001]

## Non-functional requirements

No latency, throughput, availability, accessibility, privacy, or retention targets were specified.

## Assumptions

This is a browser calendar UI for one user. Persistence beyond the current application session and cross-device synchronization are not specified; this specification makes no guarantee about them.

## Out of scope

Multi-user accounts and sharing, Google account/API integration, recurring and all-day event behavior, time-zone rules, and a visual clone of Google Calendar are outside the confirmed scope. Exact calendar names and event contents in the attached reference are not requirements.

> Exact source expansion: `sfref:v1:story:raj-cal:432ea1ac6ac60f188df0edff17c25302836bcc6dbff4afa388e08fe8f602508a`. Use `singularity-flow show sfref:v1:story:raj-cal:432ea1ac6ac60f188df0edff17c25302836bcc6dbff4afa388e08fe8f602508a --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/raj-cal/artifacts/planning/plan.md sha256=5f3983b51efeb44843b4e374ebb5f4c47db113c93801c816e727e83aacfda640 status=captured projection=approved-summary representation-sha256=sha256:17953ef8187f5d6d12ed038ec0ebfb4143d954f00d37ad85241da1de866f08be brief-sha256=17953ef8187f5d6d12ed038ec0ebfb4143d954f00d37ad85241da1de866f08be expansion=sfref:v1:story:raj-cal:261163591845d6eee924d4f0e2abcde8c497a8ee7b4586d26bc560d2814fa74f -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `raj-cal`
- Producer: `planning` generation 1
- Consumer: `implementation`
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

> Exact source expansion: `sfref:v1:story:raj-cal:261163591845d6eee924d4f0e2abcde8c497a8ee7b4586d26bc560d2814fa74f`. Use `singularity-flow show sfref:v1:story:raj-cal:261163591845d6eee924d4f0e2abcde8c497a8ee7b4586d26bc560d2814fa74f --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
