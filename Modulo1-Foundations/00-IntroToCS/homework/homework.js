'use strict'
/*
$           PASAR DE BINARIO A DECIMAL 
(Se eleva a potencia 2 cada número binario y se suma el resultado de cada numero al final.)
?                   (10011)
?              1 x 2^0 = 1 x  1 =  1 
?              1 x 2^1 = 1 x  2 =  2
?              0 x 2^2 = 0 x  4 =  0    = 19   
?              0 x 2^3 = 0 x  8 =  0
?              1 x 2^4 = 1 x 16 = 16
*/
function BinarioADecimal(num) {
  var array = num.split("");

  var suma = 0
   for (let i = 0; i < array.length; i++) {
     suma = suma + Math.pow(2, array.length-1-i) * array [i]
   }
   return suma
}


/*
$         PASAR DE DECIMAL A BINARIO 
(Se divide el numero decimal en 2 hasta que el residuo sea menor a 2, luego se cuentan los residuos de derecha a izquierda tomando el último ??numero como residual)
?                   19
?             19 / 2 = 9 resto 1 ----> 1 
?              9 / 2 = 4 resto 1 ----> 1 
?              4 / 2 = 2 resto 0 ----> 0  
?              2 / 2 = 1 ------------> 1 
*/

function DecimalABinario(num){
  let binario = "";

   while (num >= 2){
     binario += (num % 2);
     num = Math.floor (num / 2);
   }
  
   binario += num; 

   return binario.split("").reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}