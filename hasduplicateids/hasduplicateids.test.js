const hasDuplicateIDs = require("./hasduplicateids.js");

describe("DOM Tree Has Dublicate IDs", () => {
  let root;
  beforeEach(() => {
    console.log("beforeEach ran...");
    // Create mock elements
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);
  });

  afterEach(() => {
    console.log("afterEach ran...");
    root = null;
  });

  it("should be a function", () => {
    expect(typeof hasDuplicateIDs).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof hasDuplicateIDs()).toEqual("boolean");
  });

  it("should return false if no root", () => {
    expect(hasDuplicateIDs()).toBeFalsy();
  });

  it("should return true if there are duplicate IDs", () => {
    // // Create mock elements
    // const root = document.createElement("div");
    // const child1 = document.createElement("div");
    // const child2 = document.createElement("div");

    // root.appendChild(child1);
    // root.appendChild(child2);

    // Add dublicate ids
    root.id = "root";
    // child1.id = "child";
    // child2.id = "child";
    root.children[0].id = "child"; // since we don't access to child1 and child2 property, we access them with .children
    root.children[1].id = "child";

    const result = hasDuplicateIDs(root);

    expect(result).toEqual(true);
  });

  it("should return false if there are no duplicate IDs", () => {
    // // Create mock elements
    // const root = document.createElement("div");
    // const child1 = document.createElement("div");
    // const child2 = document.createElement("div");

    // root.appendChild(child1);
    // root.appendChild(child2);

    // Add ids
    root.id = "root";
    // child1.id = "child1";
    // child2.id = "child2";
    root.children[0].id = "child1";
    root.children[1].id = "child2";

    const result = hasDuplicateIDs(root);

    expect(result).toEqual(false);
  });
});
