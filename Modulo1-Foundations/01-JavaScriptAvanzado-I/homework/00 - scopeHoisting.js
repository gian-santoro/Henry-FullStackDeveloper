//$ Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

x = 1; // La x va a valer uno, pero no esta declarada como variable
var a = 5; // la variable a vale 5
var b = 10; // la variable b vale 10
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //$ 8
};
c(8, 9, 10);
console.log(b); //8
console.log(x);
