/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber(aleatorio) {
aleatorio=parseInt(Math.random()*10);
  if(aleatorio==0){
    aleatorio=aleatorio+1;
  }
  return aleatorio;
}

function playGame(randomNumber, arrayNum) {
 let i=0;
//revisar en clase no me sale cuando no hay ningun numero en el array
 while(i<arrayNum.length){
  if(arrayNum[i]==randomNumber) {
    console.log(`Exacto, has acertado en el ${i+1} intento! el numero era el ${arrayNum[i]}`);
  } else if (arrayNum[arrayNum] && arrayNum[i]!=randomNumber) {
    console.log("Ninguno de los numeros introducido coincide con el creado aleatoriamente");
  }
  i++;
 }
}
module.exports = {
  generateRandomNumber,
  playGame,
};
