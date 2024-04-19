/* Dado el siguiente array: let numeros = [1, 2, 3, 4, 5] , escribe un código
que calcule la suma de todos los números e imprima el resultado en la consola.
8. Escribe un código que sume todos los números pares del 1 al 100 utilizando un ciclo
while y luego imprima el resultado en la consola.*/
    let numeros = [1, 2, 3, 4, 5];
    let suma = 0;   
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);

    let sumaPares = 0;
    let i = 0;
    while (i <= 100) {
        if (i % 2 == 0) {
            sumaPares += i;
        }
        i++;
    }
    console.log(sumaPares); 