import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
global.ResizeObserver = require("resize-observer-polyfill");

afterEach(() => {
	cleanup();
});