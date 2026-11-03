<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "test-101",
  "workType": "spec-driven-standard",
  "phase": "release",
  "generation": 1,
  "status": "awaiting_approval",
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
      "filename": "conformance.md",
      "mediaType": "text/markdown",
      "sha256": "a917da880645d9f68a345dfb0ef81645b23f8701223083a7102f9723ceb0b102",
      "bytes": 5231
    },
    "generation": 1,
    "publishedAt": "2026-11-03T18:22:53.482Z"
  },
  "sourceCommit": "66b49eed68eff38196b7b2203426c79e2c07b748",
  "generationCommit": "5c3b64e8816020c938d5042d93ac76f0685c4c7d",
  "publicationCommit": "5c3b64e8816020c938d5042d93ac76f0685c4c7d",
  "configSha256": "ece34bebf699bd016761306f85eb0a38c9eb13e453e52f100944569c96215590",
  "sourceSha256": "ba3d41abfff47fe1050d716eda6fb2fcc3c5a9ffe317fb2382d6d92a7e3b5071",
  "template": {
    "path": "singularity/work-items/test-101/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/test-101/context/inputs-release-gen1.json",
    "sha256": "8e7eec90a023ab3740c02df55378274e95b7475718e737cbd90d3509e9fe7681",
    "renderedSha256": "d8f51154e25cf6b932231f3389c0da5928d7b5948491c8ec093218e530686a89",
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
      "path": "singularity/work-items/test-101/telemetry/release-gen1.json",
      "sha256": "59ab2be310660a16e3c501ce92ce8017a6ed0c08a0dc9e01ed44e80378408e67",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 32325,
        "estimatedTokens": 8082,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 32325,
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
      "startedAt": "2026-11-03T18:22:53.482Z",
      "completedAt": "2026-11-03T18:22:53.482Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": "sha256:873a7fe2528bae62f029cec7d51dac5e17124dd8ec7bd61fdb3fa49818ae7209"
}
-->

# Release conformance — test-101

The final human-readable trace `[SPK:REQ-042]`. Before publication, add at least one evidence
file below this release artifact's `verification/` directory. Its source-bound index must identify
the approved Verification generation, exact evidence paths and hashes, observed results, and gaps;
this document says what that evidence proves. Do not claim a result absent from approved evidence.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[TEST-101:REQ-001]` and `[TEST-101:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. Under `## Upstream discrepancies`, describe each
problem and its owner, never a verdict; the engine-written Verdict summary lists each gap with the
upstream issue that covers it.

| Clause | Evidence | Verdict |
|---|---|---|
| `TEST-101:REQ-001` | Approved Verification generation 1 reports `src/App.test.jsx`, “shows Todo tasks and events in month, week, and day views,” passed; source `src/App.jsx` carries `@clause:TEST-101:REQ-001`. See `verification/evidence-index.md`. | matched — approved report records both item types in all three views; retained packet has no structured Verification test result. |
| `TEST-101:REQ-002` | Approved Verification generation 1 reports `src/App.test.jsx`, “creates both a Todo task and a general event,” passed; source `src/App.jsx` carries `@clause:TEST-101:REQ-002`. See `verification/evidence-index.md`. | matched — approved report records both items found in the calendar; retained packet has no structured Verification test result. |
| `TEST-101:REQ-003` | Approved Verification generation 1 reports `src/App.test.jsx`, “edits Todo tasks and events,” passed; source `src/App.jsx` carries `@clause:TEST-101:REQ-003`. See `verification/evidence-index.md`. | matched — approved report records updated titles present and old titles absent; retained packet has no structured Verification test result. |
| `TEST-101:REQ-004` | Approved Verification generation 1 reports `src/App.test.jsx`, “deletes Todo tasks and events,” passed; source `src/App.jsx` carries `@clause:TEST-101:REQ-004`. See `verification/evidence-index.md`. | matched — approved report records deleted titles absent; retained packet has no structured Verification test result. |
| `TEST-101:AC-001` | `singularity/work-items/test-101/evidence/calendar-ui.png`, SHA-256 `2745d57a28572a1240df1344cbb747cd8f7b0668b3740cbe6617eeda250bcca1`; valid unchanged visual review WIT-001 satisfies the `calendar-screen` slot. See `verification/evidence-index.md`. | matched — screenshot has a valid recorded visual review. |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

| Article | Type | Verdict | Recorded by |
|---|---|---|---|
| — | — | None: this Story pinned no constitution. | — |

## Exceptions

Every constitution exception, with article, reason, scope, authority, and expiry `[SPK:REQ-103]`.

None recorded; this Story pinned no constitution.

## Deviations

Accepted deviations carried from convergence, and the authority that accepted each.

- `GF-8a3cd62756af` / `CF-418b395c70fc`: `package-lock.json` changed without an observed claim. Accepted deviation in approved convergence generation 1; recorded reason: “nothig.it is good we are fine”. The delivered convergence projection does not identify the accepting person's identity.
- `GF-cf6d3fc60339` / `CF-21034d278357`: `package.json` changed without an observed claim. Accepted deviation in approved convergence generation 1; recorded reason: “it is ok checked and we are good”. The delivered convergence projection does not identify the accepting person's identity.

## Upstream discrepancies

None identified in the approved specification, planning, and implementation inputs or retained execution evidence. The two accepted convergence deviations above remain trace-evidence gaps, not findings that the changes were unplanned.

## Self-approval disclosures

A conformance report discloses every phase approved by the identity that produced it, with that
identity, so self-approval is never read as independent review.

Recorded from the retained approvals. Keep every line.

- `specification`: self-approved by ashokraj2011; not an independent review.
- `planning`: self-approved by ashokraj2011; not an independent review.
- `implementation`: self-approved by ashokraj2011; not an independent review.
- `convergence`: self-approved by ashokraj2011; not an independent review.
- `verification`: self-approved by ashokraj2011; not an independent review.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: convergence

<!-- source=singularity/work-items/test-101/artifacts/convergence/convergence.md sha256=1ef354961695fda5b4d01d5704d20b2002296472e1c66a00562a373dfaac177f status=captured projection=full representation-sha256=sha256:8105105b85724874f118f156b0022c09067e8383e49a37dd8cecd72d5f677d7f expansion=sfref:v1:story:test-101:da7ce53abaea530174f6a55242639a47efecbb995f57be42a5c95a90e8574e74 -->

# Convergence — test-101

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `0ff3d137f1330232747ae84503697f82b3bf53e7cf70da263f58ff1f211d81cb`
- Reconciliation SHA-256: `8f4f0c7cf3ae374eb797a11d12448be87150bd706a7105044e8f9291dd704b00`
- Source target: `8c0f07cb4736fe59728697f53289ac3567b1a060`

## Deterministic facts

- **CF-21034d278357** · unclaimed-changed-path: package.json changed and no observed claim cites it; this is missing trace evidence, not a finding that the change was unplanned
- **CF-418b395c70fc** · unclaimed-changed-path: package-lock.json changed and no observed claim cites it; this is missing trace evidence, not a finding that the change was unplanned

## Assisted candidates

- No assisted candidates are bound to this iteration.

## Findings and dispositions

| Finding | Item | Clauses | Disposition | Reason |
|---|---|---|---|---|
| GF-8a3cd62756af | CF-418b395c70fc | — | accepted-deviation | nothig.it is good we are fine |
| GF-cf6d3fc60339 | CF-21034d278357 | — | accepted-deviation | it is ok checked and we are good |

## Unresolved blockers

- None.

## Allowed next actions

- `advance-to-verification`

> Exact source expansion: `sfref:v1:story:test-101:da7ce53abaea530174f6a55242639a47efecbb995f57be42a5c95a90e8574e74`. Use `singularity-flow show sfref:v1:story:test-101:da7ce53abaea530174f6a55242639a47efecbb995f57be42a5c95a90e8574e74 --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/test-101/artifacts/verification/test-evidence.md sha256=6e6f71c1a14b435e4cc6139c1e44fc3011a24c66aa1a3b9f279da763290ba8be status=captured projection=approved-summary representation-sha256=sha256:ce5182c1a7d31e4544e8e41affb42f3f16943f76dfaa5c2175680a1baec58621 brief-sha256=ce5182c1a7d31e4544e8e41affb42f3f16943f76dfaa5c2175680a1baec58621 expansion=sfref:v1:story:test-101:465536247412b2a4bc8aac72ce09e7b73f0590bcd443cd35342efbcf3f664c6e -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `test-101`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/test-101/artifacts/verification/test-evidence.md`
- Source SHA-256: `61edc812d9b8f8391ae12cb52fb72427dd923b97b3738bfa5a062652dc64e19b`

## Summary from “Agent brief”

Verification passed for the focused UI suite (4/4 tests), production build, and lint on the current `test-101` checkout at `303710d15e6f8de710d2fe4cf18c068c571698d1` (source tree `sha256:873a7fe2528bae62f029cec7d51dac5e17124dd8ec7bd61fdb3fa49818ae7209`). The tests exercise display of both item types in month, week, and day views, plus create, edit, and delete flows for each type. The retained screenshot for `TEST-101:AC-001` has a valid, unchanged visual review (WIT-001). No fresh governed publication test or verification submission has been run; these local checks are diagnostic, not phase approval. Recommend proceeding to prepublish, with publication gates and human review still outstanding.

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

> Exact source expansion: `sfref:v1:story:test-101:465536247412b2a4bc8aac72ce09e7b73f0590bcd443cd35342efbcf3f664c6e`. Use `singularity-flow show sfref:v1:story:test-101:465536247412b2a4bc8aac72ce09e7b73f0590bcd443cd35342efbcf3f664c6e --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- No clause in the table is partial or missing.
<!-- singularity-flow:verdict-summary:end -->
