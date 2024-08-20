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

    static Best(rectangles, isBetterThan){
        if (!rectangles) {
            return undefined;
        }
        var champion = rectangles[0];
        for (var i = 1; i < rectangles.length; i++) {
            var challenger = rectangles[i];
            if (isBetterThan(challenger, champion)){
                champion = challenger;
            }
        }
        return champion;
    }

    static WithLargestArea(rectangles){
        return Rectangle.Best(rectangles, (challenger, champion) => {
            return challenger.hasBiggerAreaThan(champion);
        });
    }

    static WithLargestPerimeter(rectangles){
        return Rectangle.Best(rectangles, (challenger, champion) => {
            return challenger.hasBiggerPerimeterThan(champion);
        });
    }
}

module.exports = {Rectangle}