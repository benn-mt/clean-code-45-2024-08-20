const {Node} = require("./node");

describe ('Nodes....', () => {
    test('Node can reach itself', () => {
        var g = new Node();
        expect(g.canReach(g)).toBe(true);
    });

    test('Node can not reach a node it is not connected to', () => {
        var g = new Node();
        var a = new Node();
        expect(g.canReach(a)).toBe(false);
    });
})