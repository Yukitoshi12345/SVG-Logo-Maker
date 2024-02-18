// Import the Triangle class from the ../lib/triangle module
const Triangle = require('../lib/triangle')

// Define a test suite named "Triangle Shape"
describe('Triangle Shape', () => {
    // Define a test case named "A triangle that is yellow and has letters JKL in the centre written in white"
    test('A triangle that is yellow and has letters JKL in the centre written in white', () => {
            const triangle = new Triangle();
        
            // Define the test parameters
            const text = 'JKL'; // Text to display inside the triangle
            const textColour = 'white'; // Colour of the text
            const shapeColour = 'yellow'; // Colour of the triangle

        // Generate the SVG string using the render method
        const renderedSVG = triangle.render(text, textColour, shapeColour);

        // Define the expected SVG string
        const expectedSVG = `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><polygon points='150,10 20,180 280,180' fill='yellow'/><text x='150' y='130' font-size='50' font-weight='bold' text-anchor='middle' fill='white'>JKL</text></svg>`;
        // Assert that the rendered SVG matches the expected one
        expect(renderedSVG).toBe(expectedSVG);      
    });
});

