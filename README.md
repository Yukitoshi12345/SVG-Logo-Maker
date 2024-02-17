![JavaScript](https://img.shields.io/badge/JavaScript-orange) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Inquirer@8.2.4](https://img.shields.io/badge/Inquirer@8.2.4-green) ![Jest@29.7.0](https://img.shields.io/badge/Jest@29.7.0-red)

<h1 align = "center"> SVG Logo Maker </h1>
This project aims to develop a command-line application specifically designed for freelance web developers. The application's primary function is to generate basic logos for their projects, eliminating the need for paid graphic design services. Through a series of prompts, users will be able to input their desired text, colour preferences, and shape choices. Based on this input, the application will create a corresponding SVG logo file named "logo.svg". This logo will be visually represented as a 300x200 pixel image that adheres to the user's specified criteria. Ultimately, this project seeks to offer a cost-effective solution for freelance web developers to create simple, yet personalised logos for their projects.

## Table of Contents

- [User Story](#user-story)
- [Objectives](#objectives)
- [Technologies Used](#technologies-used)
- [Test Instruction](#test-instruction)
- [Screenshot](#screenshot)
- [Video](#video)
- [Output](#output)
- [Installation](#installation)
- [License](#license)

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Technologies Used
- JavaScript
- Node.js
- Inquirer (version 8.2.4)
- Jest (version 29.7.0)

## Test Instruction
  #### Command to install node:
  `
  npm install
  `
  
  #### Command to install Inquirer dependencies:
  `
  npm i inquirer@8.2.4
  `

  #### Command to install Jest dependencies:
  `
  npm i jest
  `

## Screenshot


## Video
A walk through video is [here](link).
[gif coming soon]

## Output
Imagine effortlessly creating simple logos for your projects, saving the cost of hiring a graphic designer. This command-line tool empowers you to do just that. It guides you through a series of prompts, starting with up to three characters for your logo's text. Choose the text colour, then select a shape – circle, triangle, or square – and personalise its colour too. Once you've answered all the prompts, your logo springs to life as an SVG file named "logo.svg," along with a confirmation message in the command line. Open the file in your browser, and there you have it – a perfectly sized 300x200 pixel image reflecting your exact specifications. It's that simple, that powerful, that time-saving. Let your creativity take the wheel, and generate logos that perfectly complement your projects.

## Installation
The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/SVG-Logo-Maker/](https://github.com/yukitoshi12345/SVG-Logo-Maker)

## License
This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/SVG-Logo-Maker/blob/main/LICENSE).