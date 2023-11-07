/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */
function parImparNulo() {
  //Escribe tu codigo aqui
  while (num1==0){
    num1 = parseInt(readline.question("introduce un numero"));
}

if (num1%2==0) {
    if (num1==0) {
    console.log("nulo"); 
    } else {
    console.log("par");  
    }

} else {
    console.log("impar");
    
}
}

module.exports = { parImparNulo };
