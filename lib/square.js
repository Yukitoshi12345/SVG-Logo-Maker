// Import the Shape class from the "./shapes" module
const Shape = require('./shapes');

// Define a Square class that inherits from the Shape class
class Square extends Shape {
  // Define a "render" method to generate the SVG code for the square
  render(text, textColour, shapeColour) {
    // Extract common SVG attributes from the base Shape class
    const { width, height, version, xmlns } = this.getSVGAttributes();
    // Build the SVG string for the square with specified attributes
    return `<svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'><rect width='150' height='150' x='75' y='25' fill='${shapeColour}'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text></svg>`;
  }
}

// Export the Square class to make it available to other modules
module.exports = Square;