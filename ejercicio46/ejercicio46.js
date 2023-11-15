//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente(A,B,C) {
  if(A>=B && B>=C) {
    return {1: A,2: B,3: C};
    }
    else if (B>=A && A>=C) {
    return {1: B,2: A,3: C};
    }
    else if (C>=B && B>=A) {
    return {1: C,2: B,3: A};
    }
    else if (A>=C && C>=B) {
    return {1: A,2: C,3: B};
    }
    else if (B>=C && C>=A) {
    return {1: B,2: C,3: A};
    }
    else if (C>=A && A>=B) {
    return {1: C,2: A,3: B};
    }
    
}

module.exports = { imprimirDescendente };
