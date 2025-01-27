//variables
let numeroSecreto = 4;
let numeroUsuario = prompt ('Me indicas un número entre 1 a 10 por favor');

console.log(numeroUsuario);
/*
este codigo realiza la comparación
*/
if (numeroUsuario == numeroSecreto) {
   //Acertamos, fue verdadera la condición
   alert('Acertaste el número');
} else {
   //La condición no se cumplió
   alert ('Lo siento no acertaste el número');
}

