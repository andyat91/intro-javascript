/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(filas) {
 
  //en vez de poner 0, ponemos string y solo concatena, no suma.
  let linea= "";
  //Lo importante de este ejercicio es concatenar en vez de hacer calculos matematicos
  //creame una linea vacia(de concatenacion)
  for (let i = 1; i <= filas; i++) {
  //le tengo que decir que j es igual a i para que en cada fila pinte uno mas
    for (let j = 1; j<=i; j++) {
  //vuelta uno ponme un 1 y da un salto de linea
  //vuelta dos ponme un 1, y un dos concatenados
      linea=linea+j;
    }
  //en cada fila pinta uno mas y da un salto de linea
    linea+="\n";
  }
  return linea;
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(filas2) {

  let linea2="";
  for(i=1 ; i<=filas2 ; i++) {
      for(j=1 ; j<=i ;j++){
  
  //en este caso se va sumando i, entonces va concatenando i+i en cada salto de linea
          linea2 = linea2 + i;
      }
  linea2 = linea2 + "\n";
  }
  return linea2;
}
// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(filas3) {
 
  let linea3 = "";
  //creo otra variable que empiece en 1
  let inicio = 0;
  for(i=0 ; i<=filas3 ; i++) {
    for(j=0 ; j<=i ; j++) {
  
      linea3 = linea3 + inicio;
      inicio++;
    }
  linea3 = linea3 + "\n";
  return filas3;  
}

}

module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
