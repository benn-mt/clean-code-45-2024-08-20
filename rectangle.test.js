const {Rectangle} = require("./rectangle");

describe("Rectangles...", () =>{
    test("Have equal area is length and width are same", () => {
        expect(new Rectangle(1,3).area()).toEqual(new Rectangle(1,3).area());
        expect(new Rectangle(2,4).area()).not.toEqual(new Rectangle(1,3).area());
    });

    test("Simple area calculations", () => {
        expect(new Rectangle(1,3).area()).toEqual(3);
        expect(new Rectangle(2,4).area()).toEqual(8);
        expect(new Rectangle(4,3).area()).toEqual(12);
    });
})