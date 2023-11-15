/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray(array) {
  for (j = 0; j < array.length-1; j++) {
    for (i = 0; i < array.length; i++) {
      if (array[i] >= array[i + 1]) {
        let aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

module.exports = { ordenarArray };
