const reverseString = require("./reversestring.js");

describe("Rever String", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string"); // we are invoking it to get typeof return value
  });

  it("shold return the reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
    expect(reverseString("wow")).toEqual("wow");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
