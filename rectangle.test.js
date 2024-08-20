const {Rectangle} = require("./rectangle");

describe("Rectangles...", () =>{
    test("Have equal area is length and width are same", () => {
        expect(new Rectangle(1,3).area()).toEqual(new Rectangle(1,3).area());
    });
})