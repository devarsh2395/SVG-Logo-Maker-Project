const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should render a Triangle", () => {
    const triangle = new Triangle();
    const expectedSvg = '<polygon fill="green" points="150,18 244, 182 56, 182" />';
    triangle.setColor('green')
    const testSvg = triangle.render();
    expect(testSvg).toEqual(expectedSvg);
  });
});

describe("Circle", () => {
  it("should render a circle", () => {
    const circle = new Circle();
    const expectedSvg = '<circle fill="green" cx="150" cy="100" r="80" />';
    circle.setColor('green')
    const testSvg = circle.render();
    expect(testSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  it("should render a Square", () => {
    const square = new Square();
    const expectedSvg = '<rect width="120" height="120" x="90" y="40" fill="green" />';
    square.setColor('green')
    const testSvg = square.render();
    expect(testSvg).toEqual(expectedSvg);
  });
});