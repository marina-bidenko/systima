import { mergeTests, mergeExpects } from "@playwright/test";
import { expect as baseExpect } from "./expect.fixture";
import { test as base } from "./test.fixture";

export const test = mergeTests(base);
export const expect = mergeExpects(baseExpect);
