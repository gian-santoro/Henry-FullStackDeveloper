'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;

 let bst = new BinarySearchTree();

  BinarySearchTree.prototype.insert = function(value){
    if(value > this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(value)
      }
    }
    if(value < this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(value)
      }
    }
  }

  BinarySearchTree.prototype.contains = function(){}

  BinarySearchTree.prototype.depthFirstForEach = function(){}

  BinarySearchTree.prototype.breadthFirstForEach = function(){}

  BinarySearchTree.prototype.size = function(){}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
