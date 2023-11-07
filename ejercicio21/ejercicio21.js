/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(array) {

let suma=array[0];
let max=array[0];
let min=array[0];
let longitud=0;

  for(i=1 ; i<array.length ; i++){
    suma = suma+array[i];
    longitud=i;
  //IMPORTANTE: si el numero que va recorriendo el array es diferente a 0, entra.
if(array[i]!=0){
    if(array[i]>max){
//ve guardandome el max del array
        max=array[i];
        if(array[i]==0){
          break;
        }
    } else if (array[i]<min && array[i]>0){
//ve guardandome el minimo del array
        min=array[i];
        if(array[i]==0){
           break;
        }
    }
//si array[i]==0 CORTA
  } else {
    break;
  }
}
let average=suma/longitud;
return {"average":average, "max":max, "min":min};
}

module.exports = { maxMinAverageUntilZero };
