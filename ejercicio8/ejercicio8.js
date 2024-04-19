/*Escribe un código que sume todos los números pares del 1 al 100 utilizando un ciclo
while y luego imprima el resultado en la consola. */

let suma = 0;
let i = 1;
while (i <= 100) {

    if (i % 2 == 0) {
        suma += i;
    }
    i++;
    console.log(suma);
}
