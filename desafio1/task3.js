//**Parte 3 : Async/Await
let saldo = 100;
let dolarHoy = 1310;
let precioProducto = 1500;

//*Crear una función asincrónica (mainAsync) que use await para llamar a las funciones que devuelven promesas en secuencia y mostrar los resultados en la consola.

//Creo las funciones que retornarán las promesas
function obtenerSaldo () {
    //Armo la promesa para poder obtener el saldo
    return new Promise ((resolve,reject)=>{
        if (saldo){
            resolve(saldo);
        } else {
            reject ("No se pudo obtener el saldo");
        }
    })
}

function obtenerDolar (){
    return new Promise ((resolve,reject)=>{
        if (dolarHoy){
            resolve(dolarHoy);
        } else {
            reject ("No se pudo obtener el precio del dolar");
        }
    })
}

function obtenerPrecio (){
    return new Promise ((resolve,reject)=>{
        if (precioProducto){
            resolve(precioProducto)
        } else {
            reject ("Nose pudo obtener el precio del producto")
        }
    })
}

//Creo la función asincrona que resolverá la promesa y mostrará los datos
async function mostrarDatos (){
    try {
        const saldoObtenido = await obtenerSaldo();
        const dolarObtenido = await obtenerDolar();
        const precioObtenido = await obtenerPrecio();
        console.log('Datos: ', saldoObtenido, ' ', dolarObtenido, ' ', precioObtenido);
    } catch(error) {
        console.log(error);
    }
}

mostrarDatos();

//Modificar las funciones y la lógica principal para manejar errores

//DUDA: No se si falta algo en cuestión de manejo de errores. Me queda resolver cómo haría para integrar estos datos. Debería crear una nueva función y promesa o sería dentro de las mismas ya creadas?