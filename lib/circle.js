const Shape = require('./shapes');

class Circle extends Shape {
    render(text, textColour, shapeColour) {
      const { width, height, version, xmlns } = this.getSVGAttributes();
      return `
        <svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'>
          <circle cx='150' cy='100' r='90' fill='${shapeColour}'/>
          <text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text>
        </svg>
      `;
    }
}
module.exports = Circle;