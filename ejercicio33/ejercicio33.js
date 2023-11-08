/**
 *  Ejercicio 33
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */

function arrayIndex(array) {
  for(i=0;i<array.length;i++){
    contenido=array[i];
    longitud=i;
    return `El indice es ${longitud} y su valor es ${contenido}`;
}
}

module.exports = { arrayIndex };
