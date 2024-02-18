// Import the Shape class from the "./shapes" module
const Shape = require('./shapes');

// Define a Circle class that inherits from the Shape class
class Circle extends Shape {
  // Define a "render" method to generate the SVG code for the circle
  render(text, textColour, shapeColour) {
    // Extract common SVG attributes from the base Shape class
    const { width, height, version, xmlns } = this.getSVGAttributes();
    // Build the SVG string for the circle with specified attributes
    return `<svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'><circle cx='150' cy='100' r='90' fill='${shapeColour}'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text></svg>`;
  }
}

// Export the Circle class to make it available to other modules
module.exports = Circle;