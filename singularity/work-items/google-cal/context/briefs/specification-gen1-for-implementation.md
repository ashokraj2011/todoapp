# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `google-cal`
- Producer: `specification` generation 1
- Consumer: `implementation`
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
