class Rectangle{
    constructor(length, width){
        this._length = length;
        this._width = width;
    }

    area(){
        return this._length * this._width;
    }
}

module.exports = {Rectangle}