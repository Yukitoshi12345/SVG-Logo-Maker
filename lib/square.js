const Shape = require('./shapes');

class Square extends Shape {
    render(text, textColour, shapeColour) {
      const { width, height, version, xmlns } = this.getSVGAttributes();
      return `
        <svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'>
          <rect width='150' height='150' x='75' y='25' fill='${shapeColour}'/>
          <text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text>
        </svg>
      `;
    }
}
module.exports = Square;