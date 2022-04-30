const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement
  }

  add(data) {
    this.rootElement = addElement(this.rootElement, data);

    function addElement(node, value) {
      if (node === null) {
        return new Node(value)
      }

      if (value < node.data) {
        node.left = addElement(node.left, value)
      } else {
        node.right = addElement(node.right, value)
      }

      return node
    }
  }

  has(data) {
    function isExist(node, value) {
      if (node === null) {
        return false
      }

      if (node.data === value) {
        return true
      }

      if (node.data > value) {
        return isExist(node.left, value)
      } else {
        return isExist(node.right, value)
      }
    }

    return isExist(this.rootElement, data)
  }

  find(data) {
    function search(node, value) {
      if (node === null) {
        return null
      }

      if (node.data === value) {
        return node
      }

      if (node.data > value) {
        return search(node.left, value)
      } else {
        return search(node.right, value)
      }
    }

    return search(this.rootElement, data)
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.rootElement === null) {
      return null
    }

    let node = this.rootElement;
    while (node.left !== null) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (this.rootElement === null) {
      return null
    }

    let node = this.rootElement;
    while (node.right !== null) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};