/**
 *  Ejercicio 22
 *  Algoritmo que imprima la cuenta y los numeros
 *  que son multiplos de 2 o de 3 que hay entre 1 y 100.
 */
//de LUCAS: Que cuente los numeros del 1 al 100 que sean divisibles entre 2 o entre 3;

function multiplosDeCien() {
//for que vaya desde 1 a 100
  let cuenta=0;
 for(i=1;i<=100;i++){
//si es multiplo de dos o de 3 ve sumando 1 a cada vuelta
  if(i%2===0 || i%3==0){
//EJEMPLO: si 2 es multiplo de 2 suma 1, si 5 no es multiplo de dos ni de 3 no sumes ninguno
     cuenta++;
  }
 
}
//devuelveme el resultado final de todas las veces que un numero es multiplo de 2 o de 3
return cuenta;
 
 }
  

module.exports = { multiplosDeCien };
