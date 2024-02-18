const Square = require('../lib/square')

describe('Square Shape', () => {
    // Define a test case named "A square that is orange and has letters XYZ in the centre written in brown"
    test('A square that is orange and has letters XYZ in the centre written in brown', () => {
            // Create a new Square object
            const square = new Square();

            // Define the test parameters
            const text = 'XYZ'; // Text to display inside the square
            const textColour = 'brown'; // Colour of the text
            const shapeColour = 'orange'; // Colour of the square

        // Generate the SVG string using the render method    
        const renderedSVG = square.render(text, textColour, shapeColour);

        // Define the expected SVG string
        const expectedSVG = `<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><rect width='150' height='150' x='75' y='25' fill='orange'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='brown'>XYZ</text></svg>`;
        // Assert that the rendered SVG matches the expected one
        expect(renderedSVG).toBe(expectedSVG);      
    });
});