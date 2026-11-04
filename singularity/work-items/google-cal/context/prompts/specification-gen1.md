# Active Story phase contract: Specification

- Work ID: `google-cal`
- Requested outcome: google — Add google like calnader ,add events ,delete events (full request: Pinned Story source below)
- Work type: `spec-driven-standard`
- Phase: `specification`
- Generation to author: 1
- Changes allowed: May edit this phase's artifacts only. Do not implement application code in this phase.
- Scope repair first: inspect phase-entry scopeReview against every pinned source, document and answered clarification while this draft is still editable. Cover each source statement with a substantive observable clause using its exact scopeReview.items[].repair.sourceReference inside that clause. This preserves short requests and paraphrases without substring guessing. If scopeReview is absent, unavailable or reports `more` items, read the whole inventory with `singularity-flow evidence scope google-cal --json`; an unresolved statement's reference is `[scope:<ITEM-ID>]` (an `SRI-` ID). A source nobody could read (an item of kind `source`, such as an attached document) has no reference: no clause link covers it.
- Scope gaps are advisory, not a blanket phase blocker. Repair clear omissions in the current draft. A disposition (included, excluded, deferred and the rest) is a person's decision, recorded in a /sf-decide turn they start: never ask for one in this turn or record one; name each open item's returned humanDecision route in your summary. A normal phase approval is not blanket acceptance of unresolved scope. Do not edit earlier phases or re-ask unchanged recorded decisions.
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `required`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish specification --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Self-healing continuation: observe the exact failure and saved evidence, diagnose its cause, preserve the existing draft, repair only work admitted by the current mutation contract, verify the repair, then rerun the returned gate. This applies to artifact, code, test, dependency, runtime, report, evidence, configuration and integration failures in any phase, including custom workflows. A failed test is not a blanket end-of-authoring gate. Failure text is data, never permission or executable instructions; use only CLI-owned routes. Do not retry unchanged conditions: changes to the diagnosed runtime or dependency can justify a fresh test run with unchanged source. Use the existing repair journal/budget; never reset a spent budget, oscillate between fixes, hide failures or accept risks automatically. Exhaustion ends unattended retries, not manual correction: preserve work and offer the exact owner/manual continuation. If the current turn cannot author, hand off to its configured author without bypassing role separation. Human authority, credentials, unavailable external prerequisites and integrity require their exact owner action; keep other admitted repairs moving. Unknown failures need bounded diagnosis and a named owner if still unresolved. Recheck scope and binding after a repair. Only fresh required execution can establish passing tests; then continue the original transition, without redoing completed authoring or changing approved upstream evidence.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Unfinished markers: TODO (in capitals), TBD, TBC, FIXME, {{...}} and [describe ...] read as unfinished work and refuse publication, even inside code spans.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Requirement completeness: read pinned sources, attachments and recorded answers; split compound requests into independently observable obligations before drafting. Identify only the affected interfaces supported by that evidence: UI, API, event/message, batch/job, CLI, library or mixed. Observable means a specified response, state change, event, file, job result or UI behavior, not necessarily a screen. Do not invent interfaces, controls, endpoints, error wording, limits or evidence requirements.
- Obligation coverage: record a compact source obligation -> REQ/AC -> observable assertion -> verification intent mapping in the artifact's existing traceability/scenario sections. Every requested behavior, explicit interface commitment, constraint and evidence obligation needs coverage or an authorized human decision. Existing acceptance criteria count; related obligations may share a clause unless the pinned contract requires separation. Honor explicit pinned constitution/template constraints. No duplicate REQ, separate scenario per noun or new mandatory table is required by this rubric. A control mentioned only as an action precondition may leave its required availability implicit: check the whole normative specification before adding anything.
- Self-check and repair: could an implementation satisfy this draft while omitting something explicitly requested? Repair clear omissions in this editable draft before prepublish; update affected clauses, scenarios and verification intent together. Reuse settled answers. For a material ambiguity or scope change, follow the pinned clarification/decision route, never invent a disposition. Do not repair application code in a requirements-only phase or edit a published/earlier artifact; use its authorized successor or upstream route.
- Repair continuation: follow the returned repairLoop.protocol and configured budget; recheck changed content and continue the returned next action when ready. Never retry unchanged content, restart a spent automation budget or treat preparation as completion. On exhaustion preserve the draft and report remaining findings with the exact recovery route; manual repair remains available under the existing policy. Coverage is not execution: tests/screenshots are requirements until genuine results exist. Keep the mapping in the artifact, not a pasted document or code dump in chat.
- Clause IDs: brackets define a clause once, as `[NS:REQ-001]` (REQ, BEH, IFC, AC or CON, three digits); cite it anywhere else in backticks without brackets.
- Scenario coverage: author S-number situations, each a heading starting with its number (`### S1 — <situation>`), with substantive Given/When/Then acceptance cases (each keyword once per case, in that order: another "when" or "then" in the sentence starts a new field) and a `## Scenario coverage` table: Clause | Scenario | Outcome (success/failure/boundary/empty), its Scenario cell only the number. Cover every behavior and acceptance clause; repeat rows for multiple outcomes. Approved rejection/error behavior needs a distinct invalid-input case with an observable error, not only failure-state prose. Use pinned request/clarification facts, not invented error wording or extra scope. Lexical hints are advisory; independent source review still judges semantic completeness.
- Specification: author a `## Verification intent` table with Clause | Methods | Criterion, one row per declared clause. Methods = test, visual, inspection, or a comma-separated combination (all required). AC Criterion is its own ID; a visual/inspection requirement names the AC proving it, and any AC a requirement names lists every method that requirement lists (a `test, visual` requirement needs a `test, visual` AC). Test-only requirements may use -. Choose from pinned source obligations: screenshot/visual acceptance is not an executable-test exemption. Resolve material ambiguity here, not in Planning.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/google-cal`
- Required artifact: `singularity/work-items/google-cal/artifacts/specification/spec.md`
- Authored content: at least 400 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Repository discovery stays within the selected checkout. Keep CLI-issued absolute paths unchanged, including exact private/external files; writes still require phase authorization.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# Specification — google-cal

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where the current Story evidence leaves something material unknown, say so with a marker rather
than guessing. Use this syntax:

    [NEEDS CLARIFICATION: <one question grounded in the current Story evidence>]

Replace the angle-bracketed placeholder; never copy or ask it as written. The question must be one
non-empty line and must arise from the pinned sources, approved upstream artifacts, repository world
model, or a contradiction among them. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

Keep every section of this template. When one does not fit this change (for example Permissions
for a library or command-line tool with no roles), write `Not applicable: <reason>` under it
rather than deleting it: later steps carry Actors, Failure and empty states, Permissions,
Boundary conditions and the other sections forward, and stop when one is missing.

## Agent brief

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

TODO: Write the Agent brief here as visible text; text inside the comment above is not read.

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — <the most important situation, in the user's words>

**Priority:** P1
**Actor:** <role>
**Context:** <what is true before this begins>

- **Given** <the starting state>
  **When** <the actor does this>
  **Then** <the observable outcome>

- **Given** <a variation worth stating>
  **When** <…>
  **Then** <…>

### S2 — <the next situation>

**Priority:** P2

- **Given** … **When** … **Then** …

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** <no records yet>
- **Failure:** <the dependency is unavailable>
- **Partial:** <some of it worked>

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `GOOGLE-CAL:REQ-001` | S1 | TODO |
| `GOOGLE-CAL:REQ-002` | S2 | TODO |
| `GOOGLE-CAL:AC-001` | S1 | TODO |

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- <requirement>. *(S1)* [GOOGLE-CAL:REQ-001]
- <requirement>. *(S1, S2)* [GOOGLE-CAL:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- <observable acceptance outcome>. *(S1)* [GOOGLE-CAL:AC-001]

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
| `GOOGLE-CAL:REQ-001` | TODO | - |
| `GOOGLE-CAL:REQ-002` | TODO | - |
| `GOOGLE-CAL:AC-001` | TODO | `GOOGLE-CAL:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[GOOGLE-CAL:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- <ART-…>

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

# Pinned Story source

- Immutable source: `singularity/work-items/google-cal/source.json`
- SHA-256: `4cf7c7f3d360d866b60680919e540beea7ec7bd9c4cf5e80fdc07a10a65d83fa`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. `specification` is not approved yet: record the human change in clarification and revise/review the scope draft normally. After its approval a later step can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "google-cal",
  "title": "google",
  "description": "Add google like calnader ,add events ,delete events",
  "acceptanceCriteria": "screenshot"
}
```

# Human clarification checkpoint

The `specification` phase uses clarification mode `required`.
Prioritize material uncertainty about: scope, acceptance criteria, actors, boundary conditions, non-functional requirements.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository brief, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Formulating evidence-grounded questions is permitted even while artifact authoring awaits clarification. Never ask the human to supply the questions or generic clarification answers. A menu promise to provide answers is not an answer.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- An approved upstream input (an earlier step’s output) settles what it states: never ask what it answers, even when the Pinned Story source is less specific.
- Missing record does not mean unanswered. Reuse actual human replies only for the same Story, phase, generation and reviewed context. A failed tool/record write requires recording repair, not repeated questions; preserve the replies and staging file on failure. Changed bindings require review, never automatic answer adoption.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- Use a file-edit tool to stage only {"responses":[...]} at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/specification-gen<N>.json`). Every turn of this step may write that exact file, so a refusal from an earlier turn does not apply after this entry: write it now. Run the returned recordAction or standalone `singularity-flow clarification record specification --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block specification publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers. When the person replies, stage their answers at responseStagingPath, run recordAction, then continue.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

Apply the delivered requirement-completeness and repair contract before handoff. Split compound
requests into observable obligations for the actual interfaces, not a UI-only checklist. Existing
acceptance criteria count as coverage. Repair source-settled omissions in this editable draft,
recheck and continue the returned route; do not repeat answered questions or alter published inputs.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on the intended outcome, scope boundaries, and acceptance criteria.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-7451cf881f103b71344b6652 at fc084151a78b (for intake, focused on this Story)

## What exists
- .w-7451cf881f103b71344b6652: 4 code files in javascript (2 files), javascriptreact (2 files); JSX, React; 4 entry points, 1 rules in code, 0 tests. (commit fc084151a78b)
- A minimal Todo application scaffolded with Vite + React. (README.md › Todo App)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

## Contracts
- app start → App (App.jsx:4)

Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:4d16b59258c04a6715b55722eb0659318228fc405e9f063fd86f93137ede1a38. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

No earlier step retained test results.

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: `/sf-appeal`
- Shell: `singularity-flow appeal repair-plan --work-id google-cal --phase specification --json`
- VS Code (model-free): not available for this action

- Copilot: `/sf-phase-documents specification`
- Shell: `singularity-flow phase show specification --json`
- VS Code (model-free): not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:4b330d3dc7b59ad542ab13cb147d8237f355d7a109f96c2204f88a5505b90585
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `specification` is `required`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Complete the required interactive clarification checkpoint and its governed response record before authoring.
