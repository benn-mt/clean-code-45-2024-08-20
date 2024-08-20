const {Rectangle} = require("./rectangle");

describe("Rectangles...", () =>{
    test("Simple area calculations", () => {
        expect(new Rectangle(1,3).area()).toEqual(3);
        expect(new Rectangle(2,4).area()).toEqual(8);
        expect(new Rectangle(4,3).area()).toEqual(12);
        expect(new Rectangle(12,0).area()).toEqual(0);
        expect(new Rectangle(0,6).area()).toEqual(0);
        expect(new Rectangle(0,0).area()).toEqual(0);
    });
})