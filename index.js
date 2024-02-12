const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

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


//   const shapeSvg = shapeElements[answers.shape](answers); // Pass answers as an argument
//   return `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//       <g>
//         ${shapeSvg}
//         <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
//       </g>
//     </svg>
//   `;
// }

// const shapeElements = {
//   Triangle: (answers) => `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`,
//   Square: (answers) => `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`,
//   Circle: (answers) => `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`,
// };