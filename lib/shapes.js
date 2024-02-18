// Define a class named Shape to represent general shapes
class Shape {
  // Constructor method for creating a Shape object with a specified colour
  constructor(colour) {
    // Set the colour of the shape
    this.colour = colour;
  }

  // Method for setting the colour of the shape
  setColor(colour) {
    // Set the colour attribute to the provided colour
    this.colour = colour;
  }

  // Method for getting the SVG attributes of the shape
  getSVGAttributes() {
    // Return an object containing SVG attributes like width, height, version, and xmlns
    return {
      width: 300, // Width of the shape in pixels
      height: 200, // Height of the shape in pixels
      version: '1.1', // SVG version
      xmlns: 'http://www.w3.org/2000/svg', // SVG namespace
    };
  }

  // Method for rendering the shape (to be implemented by child classes)
  render() {
    // Throw an error indicating that each child shape needs to implement its own rendering instructions
    throw new Error("Each type of shape needs its own way to be drawn on the screen, so child shapes must provide their own render instructions.");
  }
}

// Export the Shape class to make it accessible to other modules
module.exports = Shape;