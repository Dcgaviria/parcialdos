/* 
10. Escribe un código que simula un juego donde el usuario debe adivinar un número
secreto entre 1 y 100. El programa debe generar un número aleatorio y pedir al
usuario que ingrese un número repetidamente hasta que adivine correctamente. El
ciclo while se utiliza para controlar la repetición hasta que el usuario adivine el
número.
*/

const numeroSecreto = Math.floor(Math.random() * 100) + 1;


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Adivina el número secreto entre 1 y 100: ', (numeroUsuario) => {

  let intento = 1;
  while (numeroUsuario!== numeroSecreto) {

    if (numeroUsuario < numeroSecreto) {
      console.log('Demasiado bajo. Intenta de nuevo.');
    }

    else if (numeroUsuario > numeroSecreto) {
      console.log('Demasiado alto. Intenta de nuevo.');
    }

    intento++;

    readline.question('Adivina el número secreto entre 1 y 100. Intento ' + intento + ': ', (numeroUsuario) => {

    });
  }


  console.log('¡Felicidades! Adivinaste el número secreto en ' + intento + ' intentos.');

  readline.close();
});