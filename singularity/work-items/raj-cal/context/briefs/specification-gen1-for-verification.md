# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `raj-cal`
- Producer: `specification` generation 1
- Consumer: `verification`
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
