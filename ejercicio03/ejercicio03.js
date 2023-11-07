/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(numero1,numero2,numero3) {
//Escribe tu codigo aqui
//let numero1 = Number(readline.question("dime el primer numero"));
//le decimos que en la libreria que hemos llamado nos pregunte esto:
//let numero2 = Number(readline.question("dime un  segundo numero"));
//let numero3 = Number(readline.question("dime un tercer numero"));
// falta cuando son dos numeros iguales


if(numero1>numero2 && numero1>numero3){
    return numero1;
} else if (numero2>numero3 ) {
    return numero2;
} else if (numero3>numero1) {
    return numero3;     
} else if(numero1==numero2 && numero2==numero3) {
    return "iguales";
}
   }

module.exports = { compareThreeNumbers };
