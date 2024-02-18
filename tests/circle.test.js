const Circle = require('../lib/circle')

describe('Circle Shape', () => {
    test('A circle that is red and has letters YIZ in the centre written in purple', () =>{
            const text = 'YIZ';
            const textColour = 'purple';
            const shapeColour = 'red';

        const circle = new Circle(text, textColour, shapeColour);
        expect(circle.render()).toBe(`<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='90' fill='red'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='purple'>YIZ</text></svg>`);      
    });
});