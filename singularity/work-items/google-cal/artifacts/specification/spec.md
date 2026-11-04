<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "google-cal",
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
      "sha256": "0cdf985df75c41ed63a9c053ce242c0c957fd985d832329b06e0fe2ed691ddcf",
      "bytes": 5518
    },
    "generation": 1,
    "publishedAt": "2026-11-04T01:43:17.867Z"
  },
  "sourceCommit": "fc084151a78b4c6e128ff447c75949a11ee0c914",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "4cf7c7f3d360d866b60680919e540beea7ec7bd9c4cf5e80fdc07a10a65d83fa",
  "template": {
    "path": "singularity/work-items/google-cal/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/google-cal/context/clarifications-specification-gen1.json",
    "sha256": "597021ff0db5f9360347ff10d62ecec0b3956d202aaf8c2c081f442736e74240",
    "promptSha256": "851825b4e87634537070dd1a3816037a729ddefc67331394249e1ac0b06dad60",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-11-04T01:39:53.639Z",
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
      "path": "singularity/work-items/google-cal/telemetry/specification-gen1.json",
      "sha256": "c45ee0971e026936f328caae88a58e7b7f2e298ca7e5b42b74ded4208e01c646",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27660,
        "estimatedTokens": 6915,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27660,
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
      "startedAt": "2026-11-04T01:43:17.867Z",
      "completedAt": "2026-11-04T01:43:17.867Z",
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

# Specification — google-cal

## Agent brief

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

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `GOOGLE-CAL:REQ-001` | S1 | success |
| `GOOGLE-CAL:REQ-002` | S1 | success |
| `GOOGLE-CAL:REQ-003` | S2 | success |
| `GOOGLE-CAL:AC-001` | S3 | success |

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
| `GOOGLE-CAL:REQ-001` | visual | `GOOGLE-CAL:AC-001` |
| `GOOGLE-CAL:REQ-002` | test | - |
| `GOOGLE-CAL:REQ-003` | test | - |
| `GOOGLE-CAL:AC-001` | visual | `GOOGLE-CAL:AC-001` |

## Non-functional requirements

None are specified by the pinned Story or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The confirmed title/date fields are the minimum event information, not an exhaustive event schema. The specification makes no claim about persistence across reloads or sessions.

## Out of scope

No behavior beyond the month-grid view, adding and deleting events, and the screenshot acceptance criterion is specified by this Story.

## Sources

- Pinned Story source: `singularity/work-items/google-cal/source.json` (SHA-256 `4cf7c7f3d360d866b60680919e540beea7ec7bd9c4cf5e80fdc07a10a65d83fa`).
- Clarification responses recorded for specification generation 1 (SHA-256 `597021ff0db5f9360347ff10d62ecec0b3956d202aaf8c2c081f442736e74240`).
- No supporting documents were offered to this phase.
