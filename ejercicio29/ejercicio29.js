/**
 *  Ejercicio 29
 *  Desarrollar un algoritmo que calcule el factorial de un numero introducido por
 *  los parametros de la funcion.
 *
 *  El factorial de un numero N es la multiplicacion de todos los numeros desde 1 hasta N.
 *  Es decir, para N = 5, el factorial seria 5! = 5*4*3*2*1 = 120;
 */

function factorialNumero(N) {
  let fact =N;
  for (i=1 ; i<N ; i++) {
    //vamos multiplicando el numero por i y lo vamos almacenando en una variable
    fact = fact*i;
    console.log(fact);
    }
    return fact;
}

module.exports = { factorialNumero };
