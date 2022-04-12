//$ Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

console.log(bar)   // undefind. Xq esta mal declarada
console.log(baz)   // no esta definida
foo()   // la funcion todavia no  existe en el stack
function foo() { console.log('Hola!') }
var bar = 1
baz = 2
