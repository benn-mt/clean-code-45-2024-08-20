class Node{
    constructor(){
        this._children = []
    }

    canReach(other){
        if (other == this){
            return true;
        } 
        for (var i = 0; i < this._children.length; i++){
            var child = this._children[i];
            if (other == child){
                return true;
            }
        }
        return false;
    }

    linkTo(other){
        this._children.push(other);
    }
}

module.exports = {Node}