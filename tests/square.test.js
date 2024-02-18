const Square = require('../lib/square')

describe('Square Shape', () => {
    test('A square that is orange and has letters YIZ in the centre written in brown', () =>{
            const text = 'YIZ';
            const textColour = 'brown';
            const shapeColour = 'orange';

        const square = new Square(text, textColour, shapeColour);
        expect(square.render()).toBe(`<svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'><rect width='150' height='150' x='75' y='25' fill='orange'/><text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='brown'>YIZ</text></svg>`);      
    });
});