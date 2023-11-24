import { sample_func } from ".";

describe("sample_func", () => {
  it("one argument", () => {
    expect(sample_func("blue")).toBe("args: blue");
  });
});
