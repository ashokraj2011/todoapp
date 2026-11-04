<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "google-cal",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "architect",
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
      "agentId": "architect"
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
      "filename": "plan.md",
      "mediaType": "text/markdown",
      "sha256": "0de7d5c1efbe14b0fae51e9e5535bbb24da019335e5e6e4802f30f9ba46abb96",
      "bytes": 10740
    },
    "generation": 1,
    "publishedAt": "2026-11-04T01:56:56.515Z"
  },
  "sourceCommit": "29c1e21c42770385d6b7e13db4508a10b085f5d2",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "4cf7c7f3d360d866b60680919e540beea7ec7bd9c4cf5e80fdc07a10a65d83fa",
  "template": {
    "path": "singularity/work-items/google-cal/config/wfa/blobs/sha256/502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "sha256": "502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/google-cal/context/inputs-planning-gen1.json",
    "sha256": "f197d21e912c99608cc2ecbc2ddd284d1bfc5009c11a9f99893a36f1afc705db",
    "renderedSha256": "4c392d3b046fa904cd4bddc7392bdc01e0f6e5932cb6c8d937bcc3abd8e6911a",
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
      "path": "singularity/work-items/google-cal/telemetry/planning-gen1.json",
      "sha256": "70a9a70eae8eb199e92fcbb341eae6b69cd38ca7102d84c925c343ed33f72cef",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28482,
        "estimatedTokens": 7121,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28482,
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
      "startedAt": "2026-11-04T01:56:56.515Z",
      "completedAt": "2026-11-04T01:56:56.515Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Implementation plan — google-cal

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Replace the Todo scaffold with a focused React month-grid calendar in `src/App.jsx` and `src/App.css`. Keep events as component state with the specified title and date fields; render the selected month, an add form, and an immediate per-event delete control. Use a date-only value consistently so rendering does not shift an event across days through UTC parsing. No persistence, recurrence, time-of-day, roles, or extra event fields are in scope. Add browser coverage in `tests/calendar.spec.js`, with the smallest required Playwright setup recorded as supporting configuration. Verify add and delete behavior in the browser, and capture the month-grid screenshot to the runner output before retaining the reviewed image at the path specified in its evidence row. The main risks are date-boundary/rendering errors and introducing test tooling into a scaffold with no existing test suite; detect these with explicit date scenarios and the configured browser run. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] [GOOGLE-CAL:AC-001]

## Approach

Replace the existing todo screen rather than adding a second application route: the repository brief identifies a minimal Vite + React app with `src/App.jsx` as the app surface and no tests. Build the month grid from the displayed month’s year/month and a date-only event value; keep the event list in React state because the specification requires no persistence. The add form accepts a title and date and places the event on that date. Each event exposes a delete button that removes it directly, without confirmation. Keep navigation, time, recurrence, timezone configuration, event limits, error wording, and persistence out of scope because none is approved. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003]

## Affected surfaces

The calendar replaces the existing todo presentation and its state/interaction contract. Event data is in-memory React state containing the approved title and date; no persistence or external service is planned. The screen and styling live in `src/App.jsx` and `src/App.css`; browser-level proof is planned in `tests/calendar.spec.js`. Actual changed-path authority remains reconciliation `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Replace todo state and controls with month-grid rendering and title/date add and immediate-delete interactions. | [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] |
| `src/App.css` | Style the month grid, event entries, add form, and delete controls for clear visual inspection. | [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:AC-001] |
| `tests/calendar.spec.js` | Add browser tests for month-grid display, adding an event on its date, immediate deletion, and screenshot setup. | [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] [GOOGLE-CAL:AC-001] |

## Sequencing

1. Replace the todo UI with the month grid and state-backed event model, including add and immediate-delete controls; this establishes all three interactive requirements. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003]
2. Add the minimal browser-test configuration and scenarios, then run them against the app. Cover a date near a month boundary to catch date-only parsing/rendering shifts. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003]
3. Capture the required visual state with an event and visible add/delete affordances to the browser runner’s output, review it, and retain the accepted image at the Story evidence path. [GOOGLE-CAL:AC-001]

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

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test.
The Witness cell holds one backticked value and nothing else. Required assurance holds one word
or stays empty: module-observed or exact-local-observed for a test, declared or source-bound for
an inspection or visual witness. For example (a fenced example is never read as a contract):
```text
| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ORDER:AC-001` | unit | test | `test/orders.test.js` | primary | module-observed |
| `ORDER:AC-002` | runbook | inspection | `docs/runbook.md` | primary | source-bound |
| `ORDER:AC-003` | screen | visual | `Order confirmation page` | primary | source-bound |
```
-->

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `GOOGLE-CAL:AC-001` | month-grid | visual | `Month grid with an event and visible add and delete controls` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

- `package.json` — add the browser-test script and required Playwright development dependency.
- `package-lock.json` — record the resolved test-tool dependency tree.
- `playwright.config.js` — configure the local Vite app and browser test/output locations.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Date-only values can render on an adjacent day if parsed as UTC; avoid UTC conversion and include a boundary-date browser assertion. Browser-test tooling may increase install/runtime cost in this small scaffold; keep it limited to the required browser tests and use the repository lockfile. If the calendar UI or test setup destabilizes the app, revert only the planning-authorized implementation/configuration changes in the later code phase and retain the approved specification and this plan. Persistence and unspecified date/time behavior are deliberately not promised. [GOOGLE-CAL:REQ-001] [GOOGLE-CAL:REQ-002] [GOOGLE-CAL:REQ-003] [GOOGLE-CAL:AC-001]

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/google-cal/artifacts/specification/spec.md sha256=33ade576d2366d5fa925dde55c7c0e26aa60102b95e2c1c33223537d814fb43d status=captured projection=approved-summary representation-sha256=sha256:b457370c74fff01a31b1924735ca8a19e79ca2691000f04d533acb92e6d11b08 brief-sha256=b457370c74fff01a31b1924735ca8a19e79ca2691000f04d533acb92e6d11b08 expansion=sfref:v1:story:google-cal:95285da2448f936d67b98d228171b4f58318b0324419d70a8d86a6bf2faf61fb -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `google-cal`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/google-cal/artifacts/specification/spec.md`
- Source SHA-256: `dc0e76815df061bfc7c37a1daa1026be92c9f57ad3701dda7447b1ece870cc56`

## Summary from “Agent brief”

Provide a month-grid calendar in which a calendar user can add an event with a title and date, see it on the calendar, and delete it immediately without a confirmation step. The screenshot acceptance criterion is a visual view of the month grid with an event and the add/delete interactions represented. No additional roles, event fields, or calendar behavior are specified.

## Actors

- **Calendar user:** views the month grid and adds or deletes events. No distinct roles or authority differences are specified.

## User scenarios

### S1 — View the month calendar and add an event

**Priority:** P1  
**Actor:** Calendar user  
**Context:** The calendar is available in a month-grid view.

- **Given** the calendar is open, **When** the user views it, **Then** the calendar presents the month in a grid.
- **Given** an event title and date, **When** the user adds the event, **Then** it appears on the calendar for that date.

### S2 — Delete an event

**Priority:** P1  
**Actor:** Calendar user  
**Context:** An event appears on the month calendar.

- **Given** an event appears on the calendar, **When** the user deletes it, **Then** it is removed immediately without a confirmation step.

### S3 — Meet the screenshot acceptance criterion

**Priority:** P1  
**Actor:** Calendar user  
**Context:** The month-grid calendar contains an event.

- **Given** the calendar is in month-grid view with an event, **When** a screenshot is captured, **Then** it shows the calendar, the event, and visible representations of the add and delete interactions.

## Failure and empty states

- **Empty:** With no events, the month grid remains available; adding an event makes it appear on its date.
- **Failure:** The pinned Story and clarification do not define failure behavior, error wording, or recovery.
- **Partial:** Partial completion of an add or delete operation is not specified.

## Permissions

A calendar user may view the calendar, add events, and delete events. No other roles or permission rules are specified.

## Boundary conditions

The calendar view is a month grid. The minimum event information specified is a title and date. No event-count limits, time-of-day, recurrence, time-zone behavior, or retention requirements are specified.

## Requirements

### Source-to-acceptance mapping

| Source obligation | Clause | Observable assertion | Verification intent |
|---|---|---|---|
| Calendar intent, clarified as a month grid | `GOOGLE-CAL:REQ-001` | The calendar presents a month-grid view. | visual |
| Add events; clarified minimum fields are title and date | `GOOGLE-CAL:REQ-002` | An added event appears on the calendar for its date. | test |
| Delete events; clarified as immediate deletion | `GOOGLE-CAL:REQ-003` | A deleted event is removed without a confirmation step. | test |
| Screenshot acceptance criterion: `screenshot` | `GOOGLE-CAL:AC-001` | A screenshot shows the month grid, an event, and the add/delete interactions. | visual |

- The calendar presents events in a month-grid view. *(S1)* [GOOGLE-CAL:REQ-001]
- A calendar user can add an event with a title and date, and the event appears on the calendar for that date. *(S1)* [GOOGLE-CAL:REQ-002]
- A calendar user can delete an event; deletion removes it immediately without confirmation. *(S2)* [GOOGLE-CAL:REQ-003]

Acceptance criterion:

- A screenshot shows the month-grid calendar with an event and visible representations of adding and deleting events. *(S3)* [GOOGLE-CAL:AC-001] [scope:SRI-35efa5d9d09b]

## Non-functional requirements

None are specified by the pinned Story or clarification.

## Assumptions

The confirmed title/date fields are the minimum event information, not an exhaustive event schema. The specification makes no claim about persistence across reloads or sessions.

## Out of scope

No behavior beyond the month-grid view, adding and deleting events, and the screenshot acceptance criterion is specified by this Story.

> Exact source expansion: `sfref:v1:story:google-cal:95285da2448f936d67b98d228171b4f58318b0324419d70a8d86a6bf2faf61fb`. Use `singularity-flow show sfref:v1:story:google-cal:95285da2448f936d67b98d228171b4f58318b0324419d70a8d86a6bf2faf61fb --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
