// Import required modules
const inquirer = require("inquirer"); // Import for interactive prompts
const fs = require("fs"); // Import for file system operations
const Circle = require('./lib/circle.js'); // Import Circle shape class
const Square = require('./lib/square.js'); // Import Square shape class
const Triangle = require('./lib/triangle.js'); // Import Triangle shape class


// Function to create a logo based on user input
function createLogo() {
  inquirer
    .prompt([
      // Prompt for logo text
      {
        name: "text",
        message: "Enter your logo text (3 characters max)",
        type: "input", // Input prompt for text entry
        validate: (text) => text.length <= 3 || "Must enter 3 characters or less." // Validate text length
      },
      
      // Prompt for text colour
      {
        name: "textColour",
        message: "Pick a colour for your text (Enter colour keyword or hexadecimal)",
        type: "input" // Input prompt for colour entry
      },

      // Prompt for shape selection
      {
        name: "shape",
        message: "Pick a shape for your logo.",
        choices: ["Circle", "Square", "Triangle"], // List of shape choices
        type: "list" // List prompt for choosing a shape
      },

      // Prompt for shape colour
      {
        name: "shapeColour",
        message: "Pick a colour for your shape (Enter colour keyword or hexadecimal)",
        type: "input" // Input prompt for colour entry
      },

    ])

    .then((answers) => {
      // Create SVG string based on user input
      const svgString = createSvgString(answers);
      // Write SVG string to a file
      fs.writeFile("generated-logo.svg", svgString, (err) => {
        if (err) {
          // Handle file writing errors
          console.error(err); 
        } else {
          // Log success message
          console.log("Generated Logo");
        }
      });
    });
}

// Function to create the SVG string representation of the logo
function createSvgString(answers) {
  // Extract answers from prompt
  const { text, textColour, shape, shapeColour } = answers;

  let shapeObject;
  switch (shape) {
    case "Circle":
      // Create a Circle object
      shapeObject = new Circle(shapeColour);
      break;
    case "Square":
      // Create a Square object
      shapeObject = new Square(shapeColour);
      break;
    case "Triangle":
      // Create a Triangle object
      shapeObject = new Triangle(shapeColour);
      break;
    default:
      // Handle invalid shape selection
      throw new Error("Invalid shape selected");
  }

  // Render the SVG string using the shape object
  return shapeObject.render(text, textColour, shapeColour);
}

// Call the createLogo function to start the logo creation process
createLogo();