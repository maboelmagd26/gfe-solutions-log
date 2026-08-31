# Flatten Array

**Source:** GreatFrontEnd
**Difficulty:** Easy
**Date:** 2026-08-24
**Expected time:** 25 min · **Actual time:** 20 min
**Status:** ✅ Solved

## Problem

Flatten an array of mixed types to a single level without using `Array.prototype.flat`.

## My approach

Before writing code, this is how I planned to solve the problem:

1. Receive an array of mixed types (`Array<unknown>`).
2. Make a copy of it, then iterate.
3. Store the results in a new array, initialized as an empty array.
4. Make a recursive call, since we don't know the level of nesting.
5. If the array's element is not an array, push it to the new flattened array.

## What I learned

- Recursion
- The call stack — every call has its own variables, and the call stack still
  holds the results of the previous calls.
- Array methods: `push`, spreading array elements
- TypeScript type inference
