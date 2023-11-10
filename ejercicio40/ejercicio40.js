/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */

function generarArrayNoRepetidos(array) {
array= [];
  for(i=0 ; i<10 ; i++) {
      array[i]=parseInt(Math.random()*100);
      if(array[i-1]==array[i]) {
          array[i]=parseInt(Math.random()*100)+1; 
      }
      //console.log(array);
  }
  return array;
}

module.exports = { generarArrayNoRepetidos };
