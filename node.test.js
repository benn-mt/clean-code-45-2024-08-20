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

    test('Node can reach connected neighbour', () => {
        var a = new Node();
        var b = new Node();
        b.linkTo(a);
        expect(b.canReach(a)).toBe(true);
    });

    test('Node connections are one directional', () => {
        var a = new Node();
        var b = new Node();
        b.linkTo(a);
        expect(a.canReach(b)).toBe(false);
    });

    test('Nodes can reach across more than one connection', () => {
        var d = new Node();
        var c = new Node();
        var b = new Node();
        b.linkTo(c);
        c.linkTo(d);
        expect(b.canReach(d)).toBe(true);
    });

    test('Circular stuff should not cause issues', () => {
        var b = new Node();
        var c = new Node();
        var d = new Node();
        var e = new Node();
        var f = new Node();
        b.linkTo(c);
        c.linkTo(d);
        d.linkTo(e);
        d.linkTo(c);
        e.linkTo(f);
        expect(b.canReach(f)).toBe(true);
    });

    test('Can count hops', ()=>{
        var a = new Node();
        var b = new Node();
        var c = new Node();
        var d = new Node();
        var e = new Node();
        var f = new Node();
        var g = new Node();
        b.linkTo(a);
        b.linkTo(c);
        b.linkTo(f);
        c.linkTo(d);
        c.linkTo(d);
        c.linkTo(e);
        d.linkTo(e);
        e.linkTo(b);
        

        expect(g.hopCount(g)).toBe(0);
        expect(() => {g.hopCount(a)}).toThrow("Node is unreachable");
        expect(b.hopCount(a)).toBe(1);
        expect(() => {a.hopCount(b)}).toThrow("Node is unreachable");
        expect(b.hopCount(d)).toBe(2);
        expect(b.hopCount(e)).toBe(2);
        expect(b.hopCount(f)).toBe(1);
        expect(c.hopCount(f)).toBe(3);
    })
})