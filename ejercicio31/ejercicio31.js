/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(N) {

  let linea="";
  //Bucle anidado con dos for dentro(no anidados entre si);
  //el primero marca el tamaño N
      for(j=0 ; j<N ; j++) {
  //el segundo crea un espacio menor que j y sale del bucle       
          for(i=0 ; i<j ; i++){
              linea+= " ";
          }
  //entra en el tercero y pinta asteriscos menos las vueltas que va dando J;
          for(k=0 ; k<N-j ; k++) {
              linea+="*";
          }
          linea+="\n";
      }
      return linea;
}

module.exports = { crearTriangulo };
