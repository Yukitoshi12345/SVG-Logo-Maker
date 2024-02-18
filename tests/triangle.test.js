const Triangle = require('../lib/triangle')

describe('Triangle Shape', () => {
    test('A triangle that is yellow and has letters YIZ in the centre written in white', () =>{
            const text = 'YIZ';
            const textColour = 'white';
            const shapeColour = 'yellow';

        const triangle = new Triangle(text, textColour, shapeColour);
        expect(triangle.render()).toBe(`<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><polygon points='150,10 20,180 280,180' fill='yellow' /><text x='150' y='130' font-size='50' font-weight='bold' text-anchor='middle' fill='white'>YIZ</text></svg>`);      
    });
});