# Get Name

**Source:** Practice exercise (TDD warm-up)
**Status:** ✅ Solved

> Renamed from `classNames` during the repo consolidation — the code is a name
> formatter, not the GFE classNames challenge.

## Problem

Format a name input defensively:

- default to `"unknown"` when no name is given
- trim surrounding spaces
- cap the length at 10 characters
- strip a leading underscore

## What I learned

- Writing a test per requirement (each rule above has its own test).
- String methods: `trim`, `slice`, `startsWith`, `substring`, and default parameters.
