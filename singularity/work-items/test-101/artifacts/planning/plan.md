<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "test-101",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 2,
  "status": "approved",
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
      "sha256": "2a46cb130ef368aad9eb4bd5b112512146bfb17850332ee79b862295d746f071",
      "bytes": 8637
    },
    "generation": 2,
    "publishedAt": "2026-11-03T16:00:26.412Z"
  },
  "sourceCommit": "2c580ef969d7c46b53dd198d0b3fc445cd6ae719",
  "generationCommit": "c42a2e6a6692ca0f1b8f9c36ee3ecfb3a4a78525",
  "publicationCommit": "c42a2e6a6692ca0f1b8f9c36ee3ecfb3a4a78525",
  "configSha256": "ece34bebf699bd016761306f85eb0a38c9eb13e453e52f100944569c96215590",
  "sourceSha256": "ba3d41abfff47fe1050d716eda6fb2fcc3c5a9ffe317fb2382d6d92a7e3b5071",
  "template": {
    "path": "singularity/work-items/test-101/config/wfa/blobs/sha256/502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "sha256": "502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 2,
    "path": "singularity/work-items/test-101/context/inputs-planning-gen2.json",
    "sha256": "d4d759e17bd2c93eaebd0fee7f8c1c47b8ce34f6a203a424e413c60e972b8fa0",
    "renderedSha256": "8e7f0b26e75bd9f3ecec6ce22859b9d01ef513e80622d013956e360ea4a692b6",
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
      "path": "singularity/work-items/test-101/telemetry/planning-gen1.json",
      "sha256": "33c749454b78b5f7ae48b415026f045db571b9b06b343415a88afa558e874458",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28476,
        "estimatedTokens": 7119,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28476,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    },
    {
      "generation": 2,
      "path": "singularity/work-items/test-101/telemetry/planning-gen2.json",
      "sha256": "45313e5d124b8f827bb495aee30900b9555a568e11fa86904c818d48a9da7ffd",
      "status": "pending",
      "models": [],
      "providerCost": null,
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
      "startedAt": "2026-11-03T16:00:11.603Z",
      "completedAt": "2026-11-03T16:00:11.603Z",
      "agent": "architect",
      "generation": 1
    },
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
      "startedAt": "2026-11-03T16:00:26.412Z",
      "completedAt": "2026-11-03T16:00:26.412Z",
      "agent": "architect",
      "generation": 2
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "planning",
      "at": "2026-11-03T16:21:17.674Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011",
        "githubLookup": "resolved"
      },
      "agent": "architect",
      "authorityGroup": "architecture-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 2,
      "artifactSha256": [
        {
          "path": "singularity/work-items/test-101/artifacts/planning/plan.md",
          "sha256": "a5dd3a295183a4462313bbfc3e815cf0bdd7a196cfe32363cfee2a44752d2541"
        }
      ],
      "artifactSet": "spec-driven-planning",
      "bundleSha256": "7df638a4ff7f0462d7771629081aa5d20c2b14c36edd7b031ee3072386cb9d86",
      "reviewPacketSha256": "8b77f304dba41f59855e88d82396aba522c30fd30c2d771d745f3465565821e2",
      "evidenceCommit": "5344b77f1b0d2027a0741a93bb98dff27311e00c",
      "artifactSetSha256": "24b706be600b467d533686fa7ec8b3c54cba6f1afa915c43f468bb9ed7765238",
      "architectureIntent": null,
      "architectureDecision": null,
      "actionContext": {
        "phase": "planning",
        "label": "Planning",
        "generation": 2,
        "submittedAt": "2026-11-03T16:16:23.056Z",
        "artifacts": [
          {
            "path": "singularity/work-items/test-101/artifacts/planning/plan.md",
            "sha256": "a5dd3a295183a4462313bbfc3e815cf0bdd7a196cfe32363cfee2a44752d2541"
          }
        ],
        "agentBriefs": [
          {
            "consumerPhase": "convergence",
            "status": "ready",
            "path": "singularity/work-items/test-101/context/briefs/planning-gen2-for-convergence.json",
            "renderedPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-convergence.md",
            "renderedSha256": "87e4120a55e32e4a175ea580bad9574b24fae9e8059b5eb973c5141e73fcb55c",
            "integritySha256": "bce5a1c84f8962350cb5698ed3cb7a9ce448d2afd01fab52bf241f2ca0165285",
            "documentId": "agent-brief-planning-gen2-convergence",
            "documentPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-convergence.md",
            "documentSha256": "87e4120a55e32e4a175ea580bad9574b24fae9e8059b5eb973c5141e73fcb55c"
          },
          {
            "consumerPhase": "implementation",
            "status": "ready",
            "path": "singularity/work-items/test-101/context/briefs/planning-gen2-for-implementation.json",
            "renderedPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-implementation.md",
            "renderedSha256": "88aad74c7f2ce88e6c4db513fccf568c8cfd1b4e39c42b044628c5c85b259592",
            "integritySha256": "764a1af5209c608d5d73691badf0a16662e266bc85e6eaae9b96afbd20fef3ae",
            "documentId": "agent-brief-planning-gen2-implementation",
            "documentPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-implementation.md",
            "documentSha256": "88aad74c7f2ce88e6c4db513fccf568c8cfd1b4e39c42b044628c5c85b259592"
          },
          {
            "consumerPhase": "verification",
            "status": "ready",
            "path": "singularity/work-items/test-101/context/briefs/planning-gen2-for-verification.json",
            "renderedPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-verification.md",
            "renderedSha256": "dd4e103ed8c1e6361a7997a039a9049efbab0410a9ce86b8ab54664088ead294",
            "integritySha256": "2570a1b40878ea408365491ec56a0a3e60ce514a76a7f1c2f059ff3fb2b6a671",
            "documentId": "agent-brief-planning-gen2-verification",
            "documentPath": "singularity/work-items/test-101/context/briefs/planning-gen2-for-verification.md",
            "documentSha256": "dd4e103ed8c1e6361a7997a039a9049efbab0410a9ce86b8ab54664088ead294"
          }
        ],
        "reviewPacketSha256": "8b77f304dba41f59855e88d82396aba522c30fd30c2d771d745f3465565821e2",
        "submittedSourceCommit": "c42a2e6a6692ca0f1b8f9c36ee3ecfb3a4a78525",
        "planId": "19eae27f2294384856f9db38"
      },
      "upstream": {
        "sha256": "sha256:7687b570588919180a39a6d9b9cb6253a1ffe461604abd37a5645bdf5aadc325",
        "refs": [
          {
            "kind": "input",
            "ref": "specification",
            "sha256": "sha256:1074313b5b76a2177f55d4fb231e14b6abbb6751216b04ab6b813db869325d72",
            "authoredSha256": "sha256:a5182d5f8945c609f0a476cf36c0660bd875b49460af5aed68bc5a7b184f0fb5"
          },
          {
            "kind": "documents",
            "ref": "planning",
            "sha256": "sha256:37517e5f3dc66819f61f5a7bb8ace1921282415f10551d2defa5c3eb0985b570"
          },
          {
            "kind": "decisions",
            "ref": "story",
            "sha256": "sha256:d8d370e25fa26c445c3d7b5b24b44353a9228d7595811205b65a3ca511eab521"
          }
        ]
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# Implementation plan — test-101

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Extend the existing React Todo screen into a single in-app calendar backed by local component state. Preserve Todo items while adding general calendar events, date navigation, and month/week/day views; provide create, edit, and delete actions for each item type. Keep Google Calendar synchronization, persistence, recurrence, and unspecified date/time semantics out of scope. Prove the five functional obligations with focused UI tests and deliver the required screenshot as separate Story evidence after implementation.

## Approach

Use the existing Vite + React application and its `src/App.jsx`/`src/App.css` surfaces rather than introducing a separate service or calendar integration. Represent Todo tasks and general events as distinguishable calendar items with a date and title, retain task completion behavior where applicable, and derive the visible date range from the selected view and navigation date. Use shared item operations so the same create/edit/delete behavior applies to both types. The specification does not define persistence, event fields beyond calendar display, recurrence, or timezone rules; assume in-memory state and a simple date selection, and do not imply data survives a reload.

## Affected surfaces

The change is contained in the existing React application view and stylesheet; calendar-item state and date/view selection remain in the client. The UI continues to operate without external calendar services. Reconcile actual changed paths against these planned surfaces before approval `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Add calendar state, view/date navigation, rendering of tasks and general events, and item create/edit/delete interactions while retaining Todo completion. | [TEST-101:REQ-001], [TEST-101:REQ-002], [TEST-101:REQ-003], [TEST-101:REQ-004] |
| `src/App.css` | Style the calendar controls, month/week/day layouts, event/task indicators, and item editing affordances responsively. | [TEST-101:REQ-001], [TEST-101:REQ-002], [TEST-101:REQ-003], [TEST-101:REQ-004] |

## Sequencing

1. Add focused UI-test tooling and tests around the current app surface, then implement the shared calendar item model and date/view navigation; this establishes a testable foundation for both item types.
2. Render both item types in month, week, and day views and implement create/edit/delete flows; verify each approved functional clause independently.
3. Run the tests and production build, launch the completed UI, and capture a representative screenshot to the Story evidence path. Review the screenshot against the visual acceptance criterion before publication.

## Test strategy

Add a focused UI test file and configure the existing Vite project to run it with Vitest and a DOM testing environment. Exercise both Todo and general-event data through visible user interactions, including each calendar view and each mutation. Run the focused tests and `npm run build`; these commands are verification, not substitutes for the retained screenshot. Capture the final calendar screenshot during implementation and copy it once to the Story evidence path; inspect that image as the visual proof. The screenshot is not an executable test output and must not be overwritten by later test runs.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `TEST-101:AC-001` | `singularity/work-items/test-101/evidence/calendar-ui.png` | verification: TEST-101:AC-001 | evidence | A retained screenshot shows the completed in-app calendar UI. |
| `TEST-101:REQ-001` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | Both Todo tasks and general events are visible in month, week, and day views. |
| `TEST-101:REQ-002` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can create a Todo task and a general event, and each appears in the calendar. |
| `TEST-101:REQ-003` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can edit a Todo task and a general event, and each updated item appears in the calendar. |
| `TEST-101:REQ-004` | `src/App.jsx` `src/App.css` | `src/App.test.jsx` | modified | The user can delete a Todo task and a general event, and neither remains displayed. |

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
| `TEST-101:AC-001` | calendar-screen | visual | `Completed in-app calendar UI` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->
- `package.json` — add a focused test script and the test runner/DOM testing dependencies needed for `src/App.test.jsx`.
- `package-lock.json` — record the corresponding reproducible dependency updates.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

The existing app is a small in-memory Todo scaffold with no established test suite; introducing test tooling adds dependency and maintenance cost. Keep the test setup limited to the UI behaviors in this plan and verify it with the focused test command and production build. A shared item model or date-range calculation could omit items at view boundaries; test both item types across all three views. Because persistence and date/time semantics are unspecified, items may reset on reload and dates should use a consistent local interpretation without claiming timezone guarantees. If the calendar changes regress the existing Todo flow or cannot be verified, revert only the calendar-related UI, styling, and test-tooling changes while preserving the original Todo behavior; do not alter approved specification inputs.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/test-101/artifacts/specification/spec.md sha256=5eb5f4c5d9b0771bd084c5590a34b6fa87605263790dc77e460d58f5cb08d52d status=captured projection=approved-summary representation-sha256=sha256:a215cc62bd8762f69847017a44cfc5cd289bdee80388096147f98efbed40d1ef brief-sha256=a215cc62bd8762f69847017a44cfc5cd289bdee80388096147f98efbed40d1ef expansion=sfref:v1:story:test-101:b6cf2c1ca0dfbfbcf5cae591d43685bccb122da3b8241efdfea0b47fdd72b5b4 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `specification` generation 1
- Consumer: `planning`
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

<!-- singularity-flow:inputs:end -->
