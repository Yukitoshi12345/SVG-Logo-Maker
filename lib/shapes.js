class Shape {
  constructor(color) {
    this.color = color; // Encapsulate color with private attribute
  }

  setColor(color) {
    this.color = color;
  }

  // Abstract render method for polymorphism
  render() {
    throw new Error('Abstract method render() must be implemented in subclasses');
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect x="75" y="40" width="160" height="200" fill="${this.color}" />`;
  }
}

// // Example usage:
// const circle = new Circle("red");
// const triangle = new Triangle("blue");
// const square = new Square("green");

// console.log(circle.render());
// console.log(triangle.render());
// console.log(square.render());

// Exports classes (Square, Triangle, Circle)
module.exports = {Circle, Triangle, Square};