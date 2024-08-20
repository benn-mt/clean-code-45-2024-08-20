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

    test("Can be square", () => {
        expect(Rectangle.Square(3).area()).toEqual(9)
    });

    test("Can caluclate perimeter", () => {
        expect(new Rectangle(0,0).perimeter()).toEqual(0);
        expect(new Rectangle(5,0).perimeter()).toEqual(10);
        expect(new Rectangle(0,4).perimeter()).toEqual(8);
        expect(new Rectangle(3,7).perimeter()).toEqual(20);
    });

    test("Can be compared", () => {
        var r1 = new Rectangle(0,0);
        var r2 = new Rectangle(1,1);
        expect(r1.hasBiggerAreaThan(r2)).toBe(false);
        expect(r2.hasBiggerAreaThan(r1)).toBe(true);
    });

    test("Can find biggest from a list", () => {
        expect(Rectangle.WithLargestArea()).toBe(undefined)
        expect(Rectangle.WithLargestArea([])).toBe(undefined)
        expect(Rectangle.WithLargestArea([
            new Rectangle(2,2)
        ]).area()).toBe(4)
    })
})