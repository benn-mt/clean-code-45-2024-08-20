class Node{
    static UNREACHABLE = Number.MAX_VALUE;

    constructor(){
        this._children = []
    }

    canReach(destination){
        var visitedNodes = this._pathTo(destination, []);
        if (visitedNodes == Node.UNREACHABLE) {
            return false;
        }
        return true;
    }

    hopCount(destination){
        var visitedNodes = this._pathTo(destination, []);
        if (visitedNodes == Node.UNREACHABLE) {
            throw new Error("Node is unreachable");
        }
        return visitedNodes.length;
    }

    _pathTo(destination, visitedNodes){
        if (this === destination){
            return visitedNodes;
        }
        if (visitedNodes.includes(this)){
            return Node.UNREACHABLE;
        }
        visitedNodes.push(this);
        var bestPathToDestination = undefined;
        for (var i = 0; i < this._children.length; i++){
            var child = this._children[i];
            var newVisitedNodes = child._pathTo(destination, [...visitedNodes]);
            if (newVisitedNodes !== Node.UNREACHABLE){
                if (bestPathToDestination == undefined || bestPathToDestination.length > newVisitedNodes.length){
                    bestPathToDestination = newVisitedNodes;
                }
            }
        }

        if (bestPathToDestination == undefined) {
            return Node.UNREACHABLE;
        }
        return bestPathToDestination;
    }
    
    linkTo(other){
        this._children.push(other);
    }
}

module.exports = {Node}