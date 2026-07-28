# Requirements Specification — SF-E-001

This specification follows the structure of ISO/IEC/IEEE 29148 adapted to Epic
scope. It is the approved input to Story planning: the planning phase allocates
these exact `REQ-nnn` and `AC-nnn` identifiers to Stories, so identifiers must
stay stable across regenerations. Renumbering breaks approved traceability.

Every requirement and acceptance criterion must cite a pinned source ID plus a
page, frame, or section. A requirement with no citation is an assumption and
belongs in the assumptions table until it is sourced.

---

## Executive summary

- **Problem or opportunity:** The ToDOAPP currently uses a purple/violet accent colour scheme (`#aa3bff` light, `#c084fc` dark). The product owner wants the application accent colour changed to blue to align with brand or aesthetic preferences.
- **Desired business outcome:** All visible accent colours in the ToDOAPP UI are rendered in blue (light and dark modes), without regression to existing functionality.
- **Users and stakeholders:** End users of the ToDOAPP web application; product owner (initiative creator: ashokraj2011).
- **Success measures:** (1) No purple/violet accent colour values remain in shipped CSS. (2) Blue accent colours applied consistently in light and dark mode. (3) WCAG 2.2 AA contrast ratio >= 3:1 maintained for UI components. (4) All existing todo CRUD functionality continues to work.
- **Scope in one sentence:** Replace the CSS accent colour tokens (`--accent`, `--accent-bg`, `--accent-border`) in `src/index.css` from purple/violet to blue for both light and dark colour schemes within the ToDOAPP repository.

---

## Definitions and glossary

| Term | Definition | Source |
| --- | --- | --- |
| Accent colour | The primary brand/highlight colour applied to interactive elements via the `--accent` CSS custom property and its alpha-derived variants (`--accent-bg`, `--accent-border`). | SRC-41041233113E |
| CSS custom property | A CSS variable declared with `--name: value` in `:root` and consumed via `var(--name)`. | SRC-41041233113E |
| Light mode | The default colour scheme applied when `prefers-color-scheme` is `light` or unset. | SRC-41041233113E |
| Dark mode | The colour scheme applied when `prefers-color-scheme` is `dark`, overriding light-mode tokens inside `@media (prefers-color-scheme: dark)`. | SRC-41041233113E |
| WCAG 2.2 AA | Web Content Accessibility Guidelines 2.2 Level AA; requires contrast ratio >= 4.5:1 for normal text and >= 3:1 for UI components. | ASM-001 |

---

## Scope

### In scope

- Replacing `--accent`, `--accent-bg`, and `--accent-border` in the `:root` block (light mode) of `src/index.css` from purple/violet values to blue equivalents.
- Replacing `--accent`, `--accent-bg`, and `--accent-border` in the `@media (prefers-color-scheme: dark)` block of `src/index.css` from purple/violet values to blue equivalents.
- Verifying no other hardcoded purple/violet colour values remain in `src/App.css` or `src/index.css`.

### Out of scope

- Changes to application logic, state management, or component behaviour.
- Addition or removal of UI features, components, or pages.
- Changes to typography, layout, spacing, or any non-colour style property.
- Changes to any file other than `src/index.css` (and `src/App.css` if purple/violet values are found there).
- Selection of the specific blue hex value — this is an implementation decision (see Q-001).
- Theming infrastructure refactors (e.g., design token systems or CSS preprocessors).

### Interfaces to systems outside this Epic

| External system | Direction | Purpose | Owner |
| --- | --- | --- | --- |
| None | — | No external system interfaces are affected by a CSS colour change. | — |

---

## Assumptions and constraints

| ID | Statement | Type | Basis | Impact if wrong |
| --- | --- | --- | --- | --- |
| ASM-001 | WCAG 2.2 AA accessibility compliance is assumed as a baseline requirement for the chosen blue accent colour. | Assumption | Standard web accessibility baseline; not explicitly stated in initiative source. | If not required, any blue value is acceptable; if required, shade selection is constrained. |
| ASM-002 | The application runs in modern browsers supporting CSS custom properties and `@media (prefers-color-scheme: dark)`. | Assumption | Current tech stack (Vite + React 19) targets modern browsers. | If legacy browsers are required, a CSS variable fallback strategy is needed. |
| ASM-003 | The blue colour shall be applied via a single canonical `--accent` token rather than scattered individual hex values. | Assumption | Maintainability best practice inferred from existing token-based architecture. | If individual overrides are acceptable, scope narrows. |
| CON-001 | All changes are confined to the `ToDOAPP` repository; no other workspace repository is affected. | Constraint | Technical | — |
| CON-002 | The specific blue hex value is not mandated by the initiative source and must be decided at Story planning. | Constraint | Business — source only states "blue"; no hex or brand guide provided. | If a specific shade is mandated later, it becomes an additional implementation constraint. |

---

## Requirements

Each requirement states a single testable capability. Use "shall" for obligations.
Priority uses MoSCoW; verification uses ISO/IEC/IEEE 29148 methods.

### REQ-001

- **Statement:** The application shall replace the light-mode accent CSS custom property (`--accent`) in `src/index.css` with a blue colour value, and update `--accent-bg` and `--accent-border` to alpha variants of the same blue.
- **Rationale:** The current value (`#aa3bff`) is purple/violet. Changing it to blue satisfies the stated business goal.
- **Priority:** Must
- **Verification method:** Inspection
- **Source citations:** SRC-41041233113E §Goal; SRC-41041233113E §"Light mode" context
- **Dependencies:** None
- **Affected users or systems:** All users of the ToDOAPP web application in light mode.
- **Assumptions relied on:** ASM-003, CON-001

### REQ-002

- **Statement:** The application shall replace the dark-mode accent CSS custom properties (`--accent`, `--accent-bg`, `--accent-border`) in the `@media (prefers-color-scheme: dark)` block of `src/index.css` with blue equivalents appropriate for dark backgrounds.
- **Rationale:** Dark mode currently uses a light-purple accent (`#c084fc`). Consistency with REQ-001 requires dark-mode parity.
- **Priority:** Must
- **Verification method:** Inspection
- **Source citations:** SRC-41041233113E §Goal; SRC-41041233113E §"Dark mode" context
- **Dependencies:** REQ-001
- **Affected users or systems:** All users of the ToDOAPP web application in dark mode.
- **Assumptions relied on:** ASM-003, CON-001

### REQ-003

- **Statement:** The application shall preserve all existing todo CRUD functionality (add item, toggle-complete, remove item) unchanged after the colour update.
- **Rationale:** A CSS-only change must not regress any JavaScript behaviour or component rendering logic.
- **Priority:** Must
- **Verification method:** Demonstration
- **Source citations:** SRC-41041233113E §Context (existing feature description)
- **Dependencies:** None
- **Affected users or systems:** All users performing todo operations.
- **Assumptions relied on:** None

### REQ-004

- **Statement:** The chosen blue accent colour shall meet WCAG 2.2 AA contrast ratio requirements (>= 3:1 for non-text UI components) against all backgrounds it is rendered on.
- **Rationale:** Accessibility is a standard baseline; changing colour must not reduce compliance.
- **Priority:** Should
- **Verification method:** Analysis
- **Source citations:** SRC-41041233113E §Context
- **Dependencies:** REQ-001, REQ-002
- **Affected users or systems:** All users, especially those relying on sufficient colour contrast.
- **Assumptions relied on:** ASM-001

---

## Business rules

### BR-001

- **Rule:** A single `--accent` CSS custom property (plus derived `--accent-bg` and `--accent-border`) shall be the sole carrier of accent colour. No hardcoded blue hex values shall appear outside these token declarations.
- **Applies to:** REQ-001, REQ-002
- **Exceptions:** None
- **Owner:** ashokraj2011 (product owner)
- **Source citations:** SRC-41041233113E §Context (existing token architecture)

---

## Acceptance criteria

Written in Given/When/Then so they are directly executable as tests.

### AC-001

- **Given:** The application is loaded in a browser with light mode active.
- **When:** A developer inspects the computed value of `--accent` on `:root` in browser DevTools.
- **Then:** The value is a blue colour (hue in the 180-270 degree HSL range, e.g. `#3b82f6`, `#2563eb`, or equivalent), and is not purple or violet.
- **Requirements:** REQ-001
- **Verification method:** Inspection
- **Test data or preconditions:** Browser with `prefers-color-scheme: light` or no preference set.
- **Source citations:** SRC-41041233113E §Goal; SRC-41041233113E §"Light mode" context

### AC-002

- **Given:** The application is loaded in a browser with dark mode active.
- **When:** A developer inspects the computed value of `--accent` on `:root` in browser DevTools.
- **Then:** The value is a blue colour appropriate for dark backgrounds (lighter blue variant), and is not purple or violet.
- **Requirements:** REQ-002
- **Verification method:** Inspection
- **Test data or preconditions:** Browser or OS set to dark mode (`prefers-color-scheme: dark`).
- **Source citations:** SRC-41041233113E §Goal; SRC-41041233113E §"Dark mode" context

### AC-003

- **Given:** The accent colour tokens have been updated to blue.
- **When:** A developer searches `src/index.css` and `src/App.css` for purple/violet colour values (`#aa3bff`, `#c084fc`, `rgba(170, 59, 255`, `rgba(192, 132, 252`).
- **Then:** No such purple/violet values are found in the committed files.
- **Requirements:** REQ-001, REQ-002
- **Verification method:** Inspection
- **Test data or preconditions:** Final committed state of `src/index.css` and `src/App.css`.
- **Source citations:** SRC-41041233113E §Context (existing colour values)

### AC-004

- **Given:** The application is running with updated blue accent colours.
- **When:** A user adds a todo item, marks it as done, and removes it.
- **Then:** All three operations complete successfully without JavaScript errors; the list updates correctly; the done item shows strikethrough; the removed item disappears from the list.
- **Requirements:** REQ-003
- **Verification method:** Demonstration
- **Test data or preconditions:** Application running locally via `npm run dev`.
- **Source citations:** SRC-41041233113E §Context (existing feature description)

### AC-005

- **Given:** The blue accent colour has been chosen and applied.
- **When:** The contrast ratio of `--accent` against `--bg` (light: `#fff`) and against `--bg` (dark: `#16171d`) is computed using a WCAG contrast checker.
- **Then:** The contrast ratio is >= 3:1 for UI components in both light and dark modes.
- **Requirements:** REQ-004
- **Verification method:** Analysis
- **Test data or preconditions:** Final hex values of `--accent` and `--bg` tokens.
- **Source citations:** SRC-41041233113E §Context

---

## Non-functional requirements

### NFR-001

- **Quality attribute:** Accessibility
- **Measurable expectation:** The blue accent colour shall achieve a minimum contrast ratio of 3:1 against all backgrounds it appears on (WCAG 2.2 SC 1.4.11 Non-text Contrast).
- **Measurement conditions:** Evaluated with a WCAG contrast tool (e.g. WebAIM Contrast Checker) against `--bg` in both light (`#fff`) and dark (`#16171d`) modes.
- **Verification method:** Analysis
- **Consequence of breach:** Accessibility regression; potential standards violation.
- **Source citations:** SRC-41041233113E §Context

### NFR-002

- **Quality attribute:** Maintainability
- **Measurable expectation:** The colour change shall be achieved by modifying no more than 6 CSS property declarations (3 tokens x 2 colour schemes), with no increase in stylesheet complexity.
- **Measurement conditions:** Count of changed lines in `src/index.css` in the final commit.
- **Verification method:** Inspection
- **Consequence of breach:** Increased maintenance burden; deviation from existing token architecture.
- **Source citations:** SRC-41041233113E §Context (existing token architecture)

---

## Data requirements

| ID | Data entity | Classification | Retention | Residency | Owner | Source citations |
| --- | --- | --- | --- | --- | --- | --- |
| — | No data entities are created or modified. The change is purely presentational (CSS). | — | — | — | — | SRC-41041233113E §Scope |

---

## Integration requirements

| ID | Interface | Type | Direction | Contract | Compatibility expectation | Source citations |
| --- | --- | --- | --- | --- | --- | --- |
| — | No integration interfaces are affected. The change is confined to static CSS assets. | — | — | — | — | SRC-41041233113E §Scope |

---

## Experience and accessibility

- **Target platforms and viewports:** Web browser (desktop and mobile); responsive layout already implemented via existing CSS. No viewport changes required.
- **Accessibility conformance target:** WCAG 2.2 AA — minimum 3:1 contrast for UI components, 4.5:1 for text rendered in the accent colour.
- **Localization and internationalization needs:** None. Colour is locale-independent.
- **Error, empty, and degraded states required:** No change. Existing empty-list and done-state styles are unaffected unless they directly reference the `--accent` token.

---

## Compliance and regulatory requirements

| ID | Obligation | Regime | Control required | Evidence for audit | Source citations |
| --- | --- | --- | --- | --- | --- |
| CR-001 | Web accessibility | WCAG 2.2 AA (assumed baseline) | Contrast ratio >= 3:1 for non-text UI components using accent colour | Contrast checker output for chosen blue vs. backgrounds | SRC-41041233113E §Context |

---

## Dependencies and risks

| ID | Description | Type | Owner | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- | --- | --- | --- |
| DEP-001 | Specific blue hex value must be confirmed before Story implementation. | Dependency | ashokraj2011 | Medium | Medium — blocks final implementation | Resolve via Q-001 during Story planning |
| RSK-001 | Chosen blue may fail WCAG contrast requirements against current background colours. | Risk | Developer | Low | Medium — may require a second iteration | Verify contrast ratio before committing chosen shade |
| RSK-002 | Future stylesheets or inline styles may not use the token, bypassing the change. | Risk | Developer | Low | Low — current codebase is token-consistent | Enforce BR-001 (token-only colour usage) in code review |

---

## Open questions and decisions

| ID | Question or decision | Status | Resolution | Decided by | Date |
| --- | --- | --- | --- | --- | --- |
| Q-001 | What specific blue hex value(s) should be used for `--accent` in light mode and dark mode? The initiative source states only "blue" without specifying a shade or palette. | Open | — | ashokraj2011 | — |

---

## Requirements coverage

| Requirement | Priority | Acceptance criteria | Source citations | Verification |
| --- | --- | --- | --- | --- |
| REQ-001 | Must | AC-001, AC-003 | SRC-41041233113E §Goal; §Light mode context | Inspection |
| REQ-002 | Must | AC-002, AC-003 | SRC-41041233113E §Goal; §Dark mode context | Inspection |
| REQ-003 | Must | AC-004 | SRC-41041233113E §Context | Demonstration |
| REQ-004 | Should | AC-005 | SRC-41041233113E §Context | Analysis |

---

## Source coverage

| Source ID | Section | Covered requirements | Notes |
| --- | --- | --- | --- |
| SRC-41041233113E | §Goal | REQ-001, REQ-002, AC-001, AC-002, AC-003 | Initiative title/goal: "Change the color to blue" |
| SRC-41041233113E | §Light mode context | REQ-001, AC-001, AC-003 | Existing `--accent: #aa3bff` |
| SRC-41041233113E | §Dark mode context | REQ-002, AC-002, AC-003 | Existing `--accent: #c084fc` |
| SRC-41041233113E | §Context (feature description) | REQ-003, AC-004 | Todo add/toggle/remove functionality |
| SRC-41041233113E | §Scope | (data/integration rows) | Confirms no data or integration changes |

---

## Quality checklist

| Check | Status |
| --- | --- |
| Every requirement is singular, testable, and free of solution bias | OK |
| Every requirement and criterion cites a pinned source and locator | OK |
| Every Must requirement has at least one acceptance criterion | OK — REQ-001->AC-001,AC-003; REQ-002->AC-002,AC-003; REQ-003->AC-004 |
| Non-functional requirements state measurable thresholds | OK — NFR-001: >=3:1 contrast; NFR-002: <=6 changed declarations |
| No requirement contradicts another | OK |
| Glossary covers every domain term used | OK |
| Identifiers are unchanged from the previous approved generation | OK — first generation |
