/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a,b) {
    return a+b;
 //Escribe tu codigo aqui
}

function substract(a,b) {
    return a-b;
 //Escribe tu codigo aqui
}

function multiply(a,b) {
    return a*b;
 //Escribe tu codigo aqui
}

function divide(a,b) {
    return a/b;
 //Escribe tu codigo aqui
}

function total(a,b) {
    return sum(a,b)+substract(a,b)+multiply(a,b)+divide(a,b);
 //Escribe tu codigo aqui
}

module.exports = { sum, substract, multiply, divide, total };
