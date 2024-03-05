// Import the Shape class from the "./shapes" module
const Shape = require("./shapes");

// Define a Triangle class that inherits from the Shape class
class Triangle extends Shape {
  // Define a "render" method to generate the SVG code for the triangle
  render(text, textColour, shapeColour) {
    // Extract common SVG attributes from the base Shape class
    const { width, height, version, xmlns } = this.getSVGAttributes();
    // Build the SVG string for the triangle with specified attributes
    return `<svg width='${width}' height='${height}' version='${version}' xmlns='${xmlns}'><polygon points='150,10 20,180 280,180' fill='${shapeColour}'/><text x='150' y='130' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text></svg>`;
  }
}

// Export the Triangle class to make it available to other modules
module.exports = Triangle;
