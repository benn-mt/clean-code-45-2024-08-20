class Rectangle{
    constructor(length, width){
        this._length = length;
        this._width = width;
    }

    static Square = (width) => {
        return new Rectangle(width, width);
    }

    area(){
        return this._length * this._width;
    }

    perimeter(){
        return this._length * 2 + this._width * 2;
    }

    hasBiggerAreaThan(other){
        return this.area() > other.area();
    }

    hasBiggerPerimeterThan(other){
        return this.perimeter() > other.perimeter();
    }

    static WithLargestArea(rectangles){
        if (!rectangles) {
            return undefined;
        }
        var champion = rectangles[0];
        for (var i = 1; i < rectangles.length; i++) {
            var challenger = rectangles[i];
            if (challenger.hasBiggerAreaThan(champion)){
                champion = challenger;
            }
        }
        return champion;
    }

    static WithLargestPerimeter(rectangles){
        if (!rectangles) {
            return undefined;
        }
        var champion = rectangles[0];
        for (var i = 1; i < rectangles.length; i++) {
            var challenger = rectangles[i];
            if (challenger.hasBiggerPerimeterThan(champion)){
                champion = challenger;
            }
        }
        return champion;
    }
}

module.exports = {Rectangle}