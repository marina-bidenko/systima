import { mergeTests } from "@playwright/test";
import { test as base } from "./test.fixture";

export const test = mergeTests(base);