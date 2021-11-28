export class BinTree {
  private root?: Node;

  public insert(item: number): void {
    if (!this.root) {
      this.root = new Node(item);
    } else {
      this.insertNode(this.root, item)
    }
  }

  public search(item: number): Node | undefined {
    if (!this.root) return undefined;
    return this.searchNode(this.root, item);
  }

  public remove(item: number): void {
    const node = this.search(item);
    if(!node) throw new Error("Node not found");

    if (!node.leftNode && !node.rightNode) {
      if(node.parent) {
        this.removeChild(node);
      } else {
        this.root = undefined;
      }
    } else if (node.leftNode && node.rightNode) {

    } else {
      const childNode = node.leftNode || node.rightNode;

      if (node.parent) {

      }
    }
  }

  public removeChild(node: Node) {
    node.leftNode = undefined;
    node.rightNode = undefined;
  }

  private insertNode(node: Node, item: number) {
    if (node.item > item) {
      if (!node.leftNode) {
        node.leftNode = new Node(item, node)
      } else {
        this.insertNode(node.leftNode, item)
      }
    } else if (!node.rightNode) {
      node.rightNode = new Node(item, node)
    } else {
      this.insertNode(node.rightNode, item)
    }
  }

  private searchNode(node: Node, item: number): Node | undefined {
    if (!node) return undefined;
    if (node.item == item) return node;

    if (node.item > item) {
      return this.searchNode(node.leftNode, item)
    } else {
      return this.searchNode(node.rightNode, item)
    }
  }

}

class Node {
  get item(): number {
    return this._item;
  }

  set item(value: number) {
    this._item = value;
  }

  get rightNode(): Node {
    return <Node>this._rightNode;
  }

  get parent(): Node {
    return <Node>this._parent;
  }

  set rightNode(value: Node | undefined) {
    this._rightNode = value;
  }
  get leftNode(): Node {
    return <Node>this._leftNode;
  }

  set leftNode(value: Node | undefined) {
    this._leftNode = value;
  }

  private readonly _parent: Node | undefined;
  private _leftNode: Node | undefined;
  private _rightNode: Node | undefined;
  private _item: number;

  constructor(item: number, parent?: Node) {
    this._item = item;
    this._parent = parent;
  }
  
  public removeChild(nodeToRemove: Node) {}
  public replaceChild() {}

  static copyNode(first, second) {}
}