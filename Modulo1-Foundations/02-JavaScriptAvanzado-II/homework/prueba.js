/*
Retorna una funcion que cuando sea invocada retorne un valor creciente. El primer valor deberia ser 1. Vas a tener que usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function counter() {
    let contador = 0
    return function incremento(){contador = contador + 1; return contador}
}

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())
