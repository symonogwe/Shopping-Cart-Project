import { describe, expect, it } from "vitest";

describe("something to be truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
