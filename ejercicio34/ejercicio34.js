/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber(aleatorio) {
  let aleatorio=parseInt(Math.random()*10);
  if(aleatorio==0){
    aleatorio=aleatorio+1;
  }
  return aleatorio;
}

function playGame(randomNumber, arrayNum) {
 let i=0;
 while(i<arrayNum){
  if(arrayNum[i]==randomNumber) {
    return i;
  }
  i++;
 }
}
module.exports = {
  generateRandomNumber,
  playGame,
};
