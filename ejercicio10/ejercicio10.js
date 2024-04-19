/* 
10. Escribe un código que simula un juego donde el usuario debe adivinar un número
secreto entre 1 y 100. El programa debe generar un número aleatorio y pedir al
usuario que ingrese un número repetidamente hasta que adivine correctamente. El
ciclo while se utiliza para controlar la repetición hasta que el usuario adivine el
número.
*/

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intento = 1;
let numeroUsuario = parseInt(prompt("Adivina el número secreto entre 1 y 100. Intento " + intento));

while (numeroUsuario!== numeroSecreto) {
 
  if (numeroUsuario < numeroSecreto) {
    alert("Demasiado bajo. Intenta de nuevo.");
  }

  else if (numeroUsuario > numeroSecreto) {
    alert("Demasiado alto. Intenta de nuevo.");
  }

  intento++;

  numeroUsuario = parseInt(prompt("Adivina el número secreto entre 1 y 100. Intento " + intento));
}

alert("¡Felicidades! Adivinaste el número secreto en " + intento + " intentos.");