/// <reference types="vite/client" />

// Types for the custom matchers defined in
// testing/playground/exercises/matchers/matchers.test.ts
declare module "vitest" {
  interface Matchers<T = unknown> {
    toBeLargerThan: (target: number) => T;
    toBeInRange: (range: [number, number]) => T;
  }
}

export {};
