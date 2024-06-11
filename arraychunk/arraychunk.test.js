const assert = require("assert"); // from node.js library
const chunk = require("./arraychunk.js");

describe("Array Chunking", () => {
  it("should create chunks of a specific size", () => {
    // the expected output is after comma (,)
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});
