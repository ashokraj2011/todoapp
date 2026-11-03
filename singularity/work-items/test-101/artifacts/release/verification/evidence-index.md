# Release verification evidence index — test-101

This index binds the release report to approved Verification generation 1 and identifies what
the retained evidence does and does not establish. These records are evidence, not a new test
run or approval.

## Approved source and revision

| Record | Exact path | SHA-256 / binding |
|---|---|---|
| Approved Verification artifact | `singularity/work-items/test-101/artifacts/verification/test-evidence.md` | `6e71f6c1a14b435e4cc6139c1e44fc3011a24c66aa1a3b9f279da763290ba8be` |
| Retained Verification submission packet, generation 1 | `singularity/work-items/test-101/submissions/verification/5604f6a1c5cfb352821b61afbf156f86db9b0e369bfcb6a71066695bda7da4d4.json` | packet SHA-256 `5604f6a1c5cfb352821b61afbf156f86db9b0e369bfcb6a71066695bda7da4d4` |
| Verified source revision | `test-101` checkout | commit `d75778d5057d77f7cadb3f55b8ba4767204c7654`; source tree SHA-256 `873a7fe2528bae62f029cec7d51dac5e17124dd8ec7bd61fdb3fa49818ae7209` |
| Retained UI screenshot | `singularity/work-items/test-101/evidence/calendar-ui.png` | SHA-256 `2745d7a28572a1240df1344cbb747cd8f7b0668b3740cbe6617eeda250bcca1` |

## Observed results

The approved Verification artifact reports the focused UI suite as 4/4 passed, along with
`npm run build` and `npm run lint` passing on source tree
`873a7fe2528bae62f029cec7d51dac5e17124dd8ec7bd61fdb3fa49818ae7209`. It maps those tests to
`TEST-101:REQ-001` through `TEST-101:REQ-004`: both item types display in month, week, and day
views, and can be created, edited, and deleted. The report names `src/App.test.jsx` and
`src/App.jsx` as the test and product source.

The retained screenshot is bound to `TEST-101:AC-001`. Visual review `WIT-001` is recorded as
valid, unchanged, and satisfying the `calendar-screen` slot.

## Gaps and limits

- The retained Verification packet records the `node-tests` check as passed with a matched source
  binding, but has no structured test counts or execution receipt. The 4/4 count, build, and lint
  results above are reported by the approved Verification artifact; the packet does not independently
  establish those details.
- No fresh governed publication test or release submission is retained.
- No negative, empty-state, failure-state, boundary-date, accessibility, security-specific,
  resilience, or observability tests were reported. The UI suite did not explicitly exercise task
  completion or date navigation. Persistence, recurrence, timezone guarantees, and Google Calendar
  synchronization are out of scope.
- The approved Verification artifact identifies no upstream discrepancies. Convergence generation 1
  separately records two accepted trace-evidence deviations for `package.json` and `package-lock.json`;
  see the release report's `## Deviations`.
