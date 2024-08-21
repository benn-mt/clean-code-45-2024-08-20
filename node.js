class Node{
    static UNREACHABLE = new Node();

    constructor(){
        this._children = []
    }

    canReach(destination){
        var visitedNodes = [];
        return this._canReach(destination, visitedNodes);
    }

    _canReach(destination, visitedNodes){
        if (destination === this){
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
        var count = this._hopCount(destination, [], 0);
        if (count == Node.UNREACHABLE) {
            throw new Error("Node is unreachable");
        }
        return count;
    }

    _hopCount(destination, visitedNodes, currentHopCount){
        if (this === destination){
            return currentHopCount;
        }
        if (visitedNodes.includes(this)){
            return Node.UNREACHABLE;
        }
        visitedNodes.push(this);
        currentHopCount++;
        for (var i = 0; i < this._children.length; i++){
            var child = this._children[i];
            var newHopCount = child._hopCount(destination, visitedNodes, currentHopCount);
            if (newHopCount !== Node.UNREACHABLE){
                return newHopCount;
            }
        }
        return Node.UNREACHABLE;
    }
    

    linkTo(other){
        this._children.push(other);
    }
}

module.exports = {Node}