const prompt = require('prompt-sync')();
let fav = Number(prompt("Ingrese tu número favorito: "));
let doble = Number(prompt("Cuál es el doble de tu número favorito?: "));
console.log(doble === fav * 2 ? "Correcto" : "Incorrecto");