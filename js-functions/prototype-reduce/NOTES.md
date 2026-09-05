# Prototype Reduce

**Source:** GreatFrontEnd
**Difficulty:** HARD
**Date:** 2026-09-05
**Expected time:** 15 min · **Actual time:** 90 min
**Status:** ⚠️ Worth checking

## Problem

Implement `Array.prototype.myReduce`, a polyfill of the native `Array.prototype.reduce`, matching its behavior for the callback signature, the optional `initialValue`, and edge cases around empty/sparse arrays.

## My approach

Before writing code, this is how I planned to solve the problem:

1. Type the generics first: the array is `T[]`, so `currentValue` (a member of it) is `T`. The accumulator starts as whatever type `initialValue` is and is also what the callback returns each call, and `myReduce` itself returns that same type — so both are typed `U`.
2. Detect whether the array is sparse by scanning for at least one existing index (`i in arr`). If no index is found to exist, the array is sparse (or empty).
3. Work out the no-initial-value edge cases up front, before entering the main loop:
   - Empty array + no initial value → throw `TypeError`.
   - Fully sparse array + no initial value → throw `TypeError` (there's nothing to seed the accumulator with).
4. If an `initialValue` was passed (checked via `arguments.length <= 1` rather than `initialValue === undefined`, since `undefined` is a valid initial value), seed the accumulator with it and start the loop at index 0.
5. Otherwise, find the accumulator by scanning for the first _existing_ index (skipping holes), seed the accumulator with that element, and start the loop right after it.
6. Iterate from `startIndex` to the end, calling the callback — but only for indices that actually exist (`i in arr`), since native `reduce` skips holes in sparse arrays instead of calling the callback with `undefined`.
7. Return the final accumulator.

## What I learned

- Checking `arguments.length` instead of `initialValue === undefined` is the correct way to detect "no initial value was passed" — `reduce(fn, undefined)` is a valid call with an initial value of `undefined`, and treating it as "missing" would be a bug.
- Spent extra time in the MDN docs confirming exact edge-case behavior instead of guessing:
  - The precise conditions under which `reduce` throws `TypeError: Reduce of empty array with no initial value` (empty array, and — less obviously — a fully sparse array, both with no initial value).
  - That native `reduce` skips holes entirely for both finding the initial accumulator and invoking the callback, rather than treating holes as `undefined` elements.
  - This MDN cross-referencing is most of why actual time (90 min) came in well over the estimate (15 min) — the algorithm itself was quick to sketch, but validating sparse-array and no-initial-value semantics against the spec took the bulk of the time.
- Marked as "worth checking" rather than solved: no test file exists yet for this challenge.
