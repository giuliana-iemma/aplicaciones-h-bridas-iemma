//Importo con commonjs
// const verificarPrimo = require('./index.js');

//Importo con ESModules
import {verificarPrimo} from "./common.cjs";

console.log(verificarPrimo(6));
console.log(verificarPrimo(3));