/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

//para sacar el promedio

function generarArray(length,s) {
 let array=[];
  for (i=0 ; i<length ; i++) {
    array[i]=parseInt((Math.random()-0.5)*s);
  }
  return array;
}

function calculosArray(array,length) {
  let promedio=0;
  let suma0=0;
    for (i=0; i<array.length ; i++) {
    promedio +=array[i]; 
    if(array[i]>0) {
     suma0+=1;
    }
   }
   return promedio/length;
}

module.exports = { generarArray, calculosArray };
