import { sample_func } from "../sample";

describe("sample_func", () => {
  it("one argument", () => {
    expect(sample_func("blue")).toBe("args: blue");
  });
});
