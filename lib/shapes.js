class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  setColor(colour) {
    this.colour = colour;
  }

  getSVGAttributes() {
    return {
      width: 300,
      height: 200,
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
    };
  }

  render() {
    throw new Error("Each type of shape needs its own way to be drawn on the screen, so child shapes must provide their own render instructions.");
  }
}

module.exports = Shape;