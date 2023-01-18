const Character = require("../character");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Character("Mametchi")).toBeInstanceOf(Object);
    //instanceof operator tests if the prototype property of a constructor appears anywhere in the prototype chain of an object
  });
});

describe("constructor", () => {
  // ...
it("sets the name property", () => {
  const character = new Character("Mametchi");

  expect(character.name).toEqual("Mametchi");
});
});

describe("constructor", () => {
  // ...
it("has a initial age of 0", () => {
  const character = new Character("Mametchi");
  expect(character.age).toEqual(0);
});
});

describe("constructor", () => {
  // ...
  it("increments the age by 1", () => {
    const character = new Character("Mametchi");

    character.growUp();

    expect(character.age).toEqual(1);
  });
});

describe("constructor", () => {
  // ...
  it("decreases by 3", () => {
    const character = new Character("Mametchi");

    character.growUp();

    expect(character.fitness).toEqual(7);
  });
});

describe("constructor", () => {
  // ...
  it("increments by 5", () => {
    const character = new Character("Mametchi");

    character.growUp();

    expect(character.hunger).toEqual(5);
  });
});

describe("constructor", () => {
  // ...
  it("increments by 4 but doesn't exceed 10", () => {
    const character = new Character("Mametchi");

    character.walk();

    expect(character.fitness).toEqual(10);
  });
});


describe("constructor", () => {
  // ...
  it("decreases by 3, but doesn't drop below 0", () => {
    const character = new Character("Mametchi");

    character.feed();

    expect(character.hunger).toEqual(0);
  });
});



describe("constructor", () => {
  // ...
  it(" I feel great should be printed in console", () => {
    const character = new Character("Mametchi");

    character.checkUp();

    expect(character.checkUp()).toMatch("I feel great")
  });
});






describe("constructor", () => {
  // ...
  it(" returns false", () => {
    const character = new Character("Mametchi");

    character.isAlive();

    expect(character.isAlive).toBe
  });
});

describe("feed", () => {
  // ...
  it("throws an error if the character is not alive", () => {
    const character = new Character("Mametchi");

    character.age = 30;

    expect(() => character.feed()).toThrow("Your character is no longer alive");
  });
});