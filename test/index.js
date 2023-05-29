function Node(prev = {}) {
    this.prev = prev;
    this.next = null;
    this.cur = prev.cur+1 || 0;
}



Node.prototype.getContext = function() {
    return this;
}

let a = new Node();
let b = new Node(a);
let c = new Node(b);
let d = new Node(c);
console.log(d);
