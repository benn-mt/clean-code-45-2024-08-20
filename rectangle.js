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

    static WithLargestArea(rectangles){
        if (!rectangles) {
            return undefined;
        }
        return rectangles[0];
    }
}

module.exports = {Rectangle}