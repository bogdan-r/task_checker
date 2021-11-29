import {BinTree} from "./BinTree";

const binTree = new BinTree();
const binTree2 = new BinTree();


console.time("Insert increase")
for (let i = 0; i < 10000; i++) {
    binTree.insert(i);
}
console.timeEnd("Insert increase")

console.time("Find increase")
for (let i = 1000; i < 2000; i++) {
    binTree.search(i);
}
console.timeEnd("Find increase")

console.time("Remove increase")
for (let i = 1000; i < 2000; i++) {
    binTree.remove(i);
}
console.timeEnd("Remove increase")
