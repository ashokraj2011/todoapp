<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "raj-cal",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
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
      "agentId": "product-owner"
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
      "filename": "spec.md",
      "mediaType": "text/markdown",
      "sha256": "eab068ca0f4321dbfa1008be205d8371751c3d61b8df0739531bfcd0c874db34",
      "bytes": 7212
    },
    "generation": 1,
    "publishedAt": "2026-11-04T05:11:16.677Z"
  },
  "sourceCommit": "f57e1ad081ca44227f88143ad4a4c8caf62266fb",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "65ca1cdacf1aa0210c9f149aa20f61435cfd2c30a21ff038bda7f6e13f73e4e3",
  "template": {
    "path": "singularity/work-items/raj-cal/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
    "sha256": "fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/spec.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/raj-cal/context/clarifications-specification-gen1.json",
    "sha256": "9efc1e8071108d0bd376e92bf9081e674b1db78f62d6c303421041d3b86dd4a3",
    "promptSha256": "babdbc28473b43af36d2ee7e6521499aba3f0d5eb1de0f2c7efe99dc66965a0e",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-11-04T05:08:20.005Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/raj-cal/telemetry/specification-gen1.json",
      "sha256": "04b873dc874c3eb39bd36ba71ffa5b73879880163dbf3517c0ab71132e986a25",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27605,
        "estimatedTokens": 6902,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27605,
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
      "startedAt": "2026-11-04T05:11:16.677Z",
      "completedAt": "2026-11-04T05:11:16.677Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — raj-cal

## Agent brief

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

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `RAJ-CAL:REQ-001` | S1 | success |
| `RAJ-CAL:REQ-002` | S1 | success |
| `RAJ-CAL:REQ-003` | S2 | success |
| `RAJ-CAL:REQ-004` | S2 | success |
| `RAJ-CAL:REQ-005` | S2 | success |
| `RAJ-CAL:REQ-006` | S3 | success |
| `RAJ-CAL:AC-001` | S3 | success |

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

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. An AC a
requirement names lists every method that requirement lists: a `test, visual` requirement needs a
`test, visual` AC. Choose from the pinned source, not from available tools. A screenshot is visual
proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `RAJ-CAL:REQ-001` | test | - |
| `RAJ-CAL:REQ-002` | test | - |
| `RAJ-CAL:REQ-003` | test | - |
| `RAJ-CAL:REQ-004` | test | - |
| `RAJ-CAL:REQ-005` | test | - |
| `RAJ-CAL:REQ-006` | visual | `RAJ-CAL:AC-001` |
| `RAJ-CAL:AC-001` | visual | `RAJ-CAL:AC-001` |

## Non-functional requirements

No latency, throughput, availability, accessibility, privacy, or retention targets were specified.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

This is a browser calendar UI for one user. Persistence beyond the current application session and cross-device synchronization are not specified; this specification makes no guarantee about them.

## Out of scope

Multi-user accounts and sharing, Google account/API integration, recurring and all-day event behavior, time-zone rules, and a visual clone of Google Calendar are outside the confirmed scope. Exact calendar names and event contents in the attached reference are not requirements.

## Sources

 - Pinned Story source: `singularity/work-items/raj-cal/source.json` (SHA-256 `65ca1cdacf1aa0210c9f149aa20f61435cfd2c30a21ff038bda7f6e13f73e4e3`).
 - Human clarification for specification generation 1: Month/Week/Day views, date navigation, event create/edit/delete, single-user scope, original dark theme, no additional edge cases, and the screenshot's functional-reference-only role.
 - User-provided screenshot attached on 2026-11-04: Google Calendar month view for November 2026; used only as a functional reference, not as a visual-match target.
 - Repository brief: Vite + React browser application with `App` as its entry point.
 - No other supporting documents were provided.
