/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(array) {
  for(i=0 ; i<array.length ; i++) {
    array[i]= array[i]*array[i]*array[i]
    return `El cubo de ${array[i]} es ${array[i]*array[i]*array[i]}`;
  }

}


module.exports = { cuboNumerosArray };
