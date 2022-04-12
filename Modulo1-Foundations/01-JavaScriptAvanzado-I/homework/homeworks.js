//? Scope & Hoisting
//$ Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

x = 1   // La x va a valer uno, pero no esta declarada como variable
var a = 5   // la variable a vale 5
var b = 10   // la variable b vale 10
var c = function(a, b, c) {
  var x = 10 
  console.log(x)
  console.log(a)
  var f = function(a, b, c) {
    b = a
    console.log(b)
    b = c
    var x = 5
  }
  f(a,b,c)
  console.log(b)
}
c(8,9,10)
console.log(b)
console.log(x)


//** */

console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;


//** */

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);



//** */

var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);


//** */

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

//? Coerción de Datos
//$ ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
//[] == ![]


//$ Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


//? Hoisting
//$¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();