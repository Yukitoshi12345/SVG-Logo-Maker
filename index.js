const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');

function createLogo() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to 3 characters)",
        name: "text",
        validate: (text) => text.length <= 3 || "Must enter 3 characters or less",
      },
      {
        type: "input",
        message: "Choose text color (Enter color keyword or hexadecimal)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shapes color (Enter color keyword or hexadecimal)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      const svgString = createSvgString(answers);
      fs.writeFile("generated-logo.svg", svgString, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    });
}

function createSvgString(answers) {
  const { text, textColor, shape, shapeBackgroundColor } = answers;

  let shapeObject;
  switch (shape) {
      case "Triangle":
          shapeObject = new Triangle(shapeBackgroundColor);
          break;
      case "Square":
          shapeObject = new Square(shapeBackgroundColor);
          break;
      case "Circle":
          shapeObject = new Circle(shapeBackgroundColor);
          break;
      default:
          throw new Error("Invalid shape selected");
  }

  return shapeObject.render(text, textColor, shapeBackgroundColor);
}

createLogo();