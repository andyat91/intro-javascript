/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(array1,array2) {
  for(i=0 ; i<array1.length ; i++) {
    if(array1[i]!=array2[i]) {
       return false;
    } else if (i==array1.length-1 && array1[i]==array2[i]) {
       return true;
    }
}
}

module.exports = { sonIguales };
