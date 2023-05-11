// Import classes
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing a triangle with a pink background
describe("Triangle test", () => {
  test("test for a triangle with a pink background", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="155, 20 246, 184 58, 184" fill="pink" />'
    );
  });
});

// Testing a triangle with a red background
describe("Square test", () => {
  test("test for a square with a red background", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="75" y="42" width="165" height="165" fill="red" />'
    );
  });
});

// Testing a triangle with a #ca55cd background
describe("Circle test", () => {
  test("test for a circle with a #ca55cd background", () => {
    const shape = new Circle();
    shape.setColor("#ca55cd");
    expect(shape.render()).toEqual(
      '<circle cx="160" cy="120" r="90" fill="#ca55cd" />'
    );
  });
});
