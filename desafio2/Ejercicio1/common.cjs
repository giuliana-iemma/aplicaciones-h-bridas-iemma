//2. Crear una función que verifique si un número que recibe es primo.

function verificarPrimo(numero){
    for (var i = 2; i <numero; i++) {
     //Consideramos desde 2 ya que un número primo solo puede dividirse por 1 y por si mismo. 
     //En cada iteración del bucle comprobamos si el número es divisible por i. Si lo es, no es primo.
     if(numero % i === 0){
         //Si el resto de la división es 0, el número no es primo
         return false;       
     } 
     }
 
     //Nos aseguramos de que el 1 no se considere primo
     return numero !==1;
 }
 
 // 3. Exportar esta función utilizando CommonJS.
     module.exports = {verificarPrimo};