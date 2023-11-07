/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {
   
    let suma=1;
    let longitud=0;
    //La suma empieza en 1, ya que la ultima vuelta le resta uno
    for(i=0;i<array.length;i++){
        suma=suma+array[i];
        
    //IF y BREAK para que pare en cuanto se encuentre el numero que buscamos
        if(array[i]==-1){
         break;
       }  
    }
    longitud=i;

    if(suma==0){
        return 0;
    } else {
//si empieza en el -1 el resultado es 0 y 0/0 es NULL
//hay que hacer un if que si la suma es igual a 0 devuelva 0 y no NULL
let media=suma/longitud;

return media;
}
//la suma partida la longitud del array-1
 }
module.exports = { mediaArrayHastaMenosUno };
