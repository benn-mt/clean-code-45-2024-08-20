class Node{
    constructor(){
        this._children = []
    }

    canReach(destination){
        var visitedNodes = [];
        return this._canReach(destination, visitedNodes);
    }

    _canReach(destination, visitedNodes){
        if (destination == this){
            return true;
        }
        if (visitedNodes.includes(this)){
            return false;
        }
        visitedNodes.push(this);
        for (var i = 0; i < this._children.length; i++){
            var child = this._children[i];
            if (child._canReach(destination, visitedNodes)){
                return true;
            }
        }
        return false;
    }

    hopCount(destination){
        return 0;
    }

    linkTo(other){
        this._children.push(other);
    }
}

module.exports = {Node}