/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
 
  let aux = 0;
  
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (array[i + 1] > array[i]) {
        aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
      
      }
    }
  }
  return array;
}

module.exports = { ordenar };
