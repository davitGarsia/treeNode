//* class defining the Treenode
class TreeNode {
  payload: string;
  children: TreeNode[];

  constructor(payload: string, children: TreeNode[] = []) {
    this.payload = payload;
    this.children = children;
  }
}

//* function to get the leaf nodes of the tree
//* uses traverse function to traverse the tree recursively
//* if the node has no children, then we save it to the leafNodes array
function getLeafs(root: TreeNode): TreeNode[] {
  let leafNodes: TreeNode[] = [];

  function traverse(node: TreeNode) {
    if (!node.children || node.children.length === 0) {
      leafNodes.push(node);
    } else {
      node.children.forEach(child => traverse(child));
    }
  }
  //* we call the traverse function with the root node
  //* and return the leafNodes array
  traverse(root);
  return leafNodes;
}

const tree = new TreeNode('root', [
  new TreeNode('child1', [
    new TreeNode('child1.1'),
    new TreeNode('child1.2', [new TreeNode('child1.2.1')]),
  ]),
  new TreeNode('child2'),
]);

const leafs = getLeafs(tree);
console.log(leafs.map(node => node.payload));
