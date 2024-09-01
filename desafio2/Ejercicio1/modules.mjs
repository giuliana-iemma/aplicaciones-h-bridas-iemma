// //Traigo el .env
// require('dotenv').config();

// const numero1 = process.env.NUMERO_1;

//Importo con commonjs
// const verificarPrimo = require('./index.js');

//Importo con ESModules
import {verificarPrimo} from "./common.cjs";

// console.log(verificarPrimo(numero1));

console.log(verificarPrimo(3));