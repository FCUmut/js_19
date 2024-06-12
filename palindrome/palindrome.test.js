const palindrome = require("./palindrome.js");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("should return true if is a palindrome", () => {
    // we use '.toBeTruthy' or '.toBeFalsy' for boolean results
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
    expect(palindrome("wow")).toBeTruthy();
  });

  it("should return false if is not a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("hey")).toBeFalsy();
  });

  it("should return false if includes spaces", () => {
    expect(palindrome(" hello")).toBeFalsy();
    expect(palindrome("world ")).toBeFalsy();
    expect(palindrome(" hey ")).toBeFalsy();
  });
});
