'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2){
    return array;
  }
  let mitad = Math.floor(array.length / 2);
  let derecha = array.slice(0, mitad);
  let izquierda = array.slice(mitad);

    while(izquierda.length > 0 && derecha.length > 0){
      array.push(izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift())
    }
    array.concat(izquierda).concat(derecha)
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
