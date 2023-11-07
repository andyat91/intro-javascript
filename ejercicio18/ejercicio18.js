/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {

  
  let suma=0;
  //contador empieza en 0 y termina en -1 ya que empieza en 0
  for(i=0;i<=N-1;i++){
  //si el numero es par entonces le vamos sumando al mismo numero 2xi
  //EJEMPLO= pones 4= 4+2*0=4  4+2*1=6  4+2*2=8
      if(N%2==0){
  //ademas lo vamos sumando al numero anterior en cada vuelta
       suma=suma+N+(2*i);
      } else {
       suma=suma+(N+1)+(2*i);
      }
  //en el caso de que sea IMPAR le smamos uno a N1 para igualarlo al par y realizar la misma operacion.
  
 
  }
 
  return suma;
}



module.exports = { sumaNPrimerosNumerosPares };
