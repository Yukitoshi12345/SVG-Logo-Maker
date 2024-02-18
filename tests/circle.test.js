// Import the Circle class from the ../lib/circle module
const Circle = require('../lib/circle')

// Define a test suite named "Circle Shape"
describe('Circle Shape', () => {
    // A circle that is red and has letters ABC in the centre written in purple"
    test('A circle that is red and has letters ABC in the centre written in purple', () => {
        // Create a new Circle object    
        const circle = new Circle();

        // Define the test parameters
        const text = 'ABC'; // Text to display inside the circle
        const textColour = 'purple'; // Colour of the text
        const shapeColour = 'red'; // Colour of the circle

        // Generate the SVG string using the render method
        const renderedSVG = circle.render(text, textColour, shapeColour);

        // Define the expected SVG string
        const expectedSVG = `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='90' fill='red'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='purple'>ABC</text></svg>`;
        
        // Assert that the rendered SVG matches the expected oneexpect(renderedSVG).toBe(expectedSVG);      
        expect(renderedSVG).toBe(expectedSVG);      
    });
});