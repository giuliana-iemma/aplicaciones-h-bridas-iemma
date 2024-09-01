
//1. Inicializar un proyecto Node.js en una carpeta con el nombre:”Ejercicio 1” y configurar el package.json.
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
//Se realiza desde el archivo con extensión .cjs. DUDA: Es esto necesario o podría haberlo hecho desde este archivo?

// 4. Importar esta función utilizando ES Modules.
//Se realiza en el archivo modules.mjs

// 5. Imprimir el resultado de la función en un archivo principal utilizando ES Modules.

//DUDA: NO PUDE HACERLO: HELP!!!

// 6. Configurar un archivo .env para manejar variables de entorno.

//DUDA: NO supe como integrar las variables al resto de los archivos. Probé con lo de dotenv  y no me funcionó

// 7. Crear un archivo README.md con la descripción del proyecto.



// 8. Configurar un repositorio Git (aplicaciones-híbridas-comisión) y subir el proyecto a GitHub.