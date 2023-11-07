/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer(seg) {

//IMPORTANTE cuenta descendente
//i empieza en seg y desciende hasta 0 y se va restando uno
  for( i=seg-1 ; i>=0 ; i--){
  console.log(i);
  if(i==0) {
    console.log("¡¡Ring!!");
  } 
  }
}

module.exports = { timer };
