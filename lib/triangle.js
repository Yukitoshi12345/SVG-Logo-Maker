const Shape = require('./shapes');

class Triangle extends Shape {
    render(text, textColour, shapeColour) {
      const { width, height, version, xmlns } = this.getSVGAttributes();
      return `<svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'><polygon points='150,10 20,180 280,180' fill='${shapeColour}' /><text x='150' y='130' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text></svg>`;
    }
}
module.exports = Triangle;