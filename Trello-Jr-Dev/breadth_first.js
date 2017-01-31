// Please read the comments and the code and implement the functions asked for
// in the comments. There are 2 parts, please complete both. Thanks!
//
// A tree is a data structure made up of nodes. Each node has a link to its
// parent and a value.

var Node = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
  }
};

// If we wanted to make this tree:
//       a
//     /   \
//    l     t
//   / \   / \
//  e   r e   d
//
// We'd do it like this:
var a = new Node(null, 'a');
var al = new Node(a, 'l');
var at = new Node(a, 't');
var ale = new Node(al, 'e');
var alr = new Node(al, 'r');
var ate = new Node(at, 'e');
var atd = new Node(at, 'd');


console.log('PART 1: START');
// Please write a function that takes a leaf node (one of the ones at the bottom
// of the tree with no children) and prints its value, then finds its parent and
// prints its value, and so on, to the top of the tree. The function should
// work for trees of any height, and the output if you call it with `ate` should
// be:
//   e
//   t
//   a

var walkUp = function(node) {
  console.log(node.val);
  if (node.myParent) {
    node = node.myParent;
    walkUp(node);
  }
};

walkUp(ate);

console.log('PART 1: END');

// If we have a node that knows about its children:
var NodeWithChildren = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
    if (myParent !== null) {
      this.myParent.children.push(this);
    }
    this.children = [];
  }
};

// we can build the same tree as above:
var a = new NodeWithChildren(null, 'a');
var al = new NodeWithChildren(a, 'l');
var at = new NodeWithChildren(a, 't');
var ale = new NodeWithChildren(al, 'e');
var alr = new NodeWithChildren(al, 'r');
var ate = new NodeWithChildren(at, 'e');
var atd = new NodeWithChildren(at, 'd');

console.log('PART 2: START');
// Please write a function that walks a tree breadth first and prints the
// vals. This function should work for trees of any depth. When called with
// `a` it should print:
//  a
//  l
//  t
//  e
//  r
//  e
//  d

var breadthFirst = function(node) {
  // holding place for each node
  var queue = [node.val];
  // collect all the nodes as each checked
  var output = [];

  while (queue.length > 0) {
    var currentNode = queue.shift();
    output.push(currentNode);

    if (node.children) {
      // console.log('conditional', node.children);
      // queue.push(node.val);
    }
  }
  console.log('output', output);
};
breadthFirst(a);

var tnqp = new NodeWithChildren(null, 'h');
var plsh = new NodeWithChildren(tnqp, 'h');
var ljtv = new NodeWithChildren(plsh, 't');
var fixg = new NodeWithChildren(ljtv, 't');
var ecwx = new NodeWithChildren(fixg, 'p');
var vneg = new NodeWithChildren(fixg, 's');
var bvzy = new NodeWithChildren(vneg, 'l');
var dagw = new NodeWithChildren(bvzy, 'm');
var iork = new NodeWithChildren(dagw, '/');
var mkdz = new NodeWithChildren(dagw, 't');
var nsbw = new NodeWithChildren(tnqp, 'u');
var fklh = new NodeWithChildren(dagw, 'a');
var tgkh = new NodeWithChildren(dagw, 'c');
var ozme = new NodeWithChildren(nsbw, 'y');
var ptym = new NodeWithChildren(dagw, 'o');
var ltxi = new NodeWithChildren(ecwx, 't');
var ndbl = new NodeWithChildren(ozme, 'i');
var uamr = new NodeWithChildren(ecwx, 'r');
var zoub = new NodeWithChildren(uamr, '.');
var lsdj = new NodeWithChildren(uamr, 'c');
var dubz = new NodeWithChildren(ecwx, 'e');
var crwf = new NodeWithChildren(dubz, 'o');
var nspn = new NodeWithChildren(dagw, '-');
var kyyr = new NodeWithChildren(dagw, 'g');
var xzmv = new NodeWithChildren(ozme, 'i');
var intv = new NodeWithChildren(kyyr, 'a');
var hcjg = new NodeWithChildren(ozme, 'l');
var sykk = new NodeWithChildren(intv, 'm');
var vesu = new NodeWithChildren(hcjg, 's');
var cwfu = new NodeWithChildren(sykk, 'e');
var zbuo = new NodeWithChildren(vneg, 'l');
var yrkc = new NodeWithChildren(hcjg, ':');
var mwwv = new NodeWithChildren(vneg, 'o');
var bazz = new NodeWithChildren(fixg, ':');
var sggl = new NodeWithChildren(fixg, '/');
var aacq = new NodeWithChildren(fixg, '/');
// If you have a correct implementation of breadthFirst, this should be a url
// that takes you to a bit of fun.
//breadthFirst(plsh);

console.log('PART 2: END');
console.log("That's all, thanks!");
