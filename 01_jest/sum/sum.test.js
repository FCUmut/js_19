const sum = require("./sum");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
  // expect(sum(1, 2)).toEqual(4); // will fail because we set, we expect 4
});
