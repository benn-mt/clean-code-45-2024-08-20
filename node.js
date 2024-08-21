class Node{
    constructor(){
        this._children = []
    }

    canReach(other){
        var visitedNodes = [];
        return this._canReach(other, visitedNodes);
    }

    _canReach(other, visitedNodes){
        if (other == this){
            return true;
        }
        if (visitedNodes.includes(this)){
            return false;
        }
        visitedNodes.push(this);
        for (var i = 0; i < this._children.length; i++){
            var child = this._children[i];
            if (child._canReach(other, visitedNodes)){
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