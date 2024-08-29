//**Parte 1: Callbacks

//*Crear tres funciones (task 1, task 2, task 3) que simulen tareas asincrónicas utilizando setTimeout.

//Task1
let saldo = 100;
//saldo = null;

function obtenerSaldo(callback){
//Consultar el saldo de mi cuenta bancaria
    //Simulamos que tarda la obtención de los datos
    setTimeout(function(){
        const dataSaldo = saldo;
        callback (dataSaldo);
    }, 1000)
}

function procesarDatos(data){
    console.log('Datos: ' + data);
}


//Task2: Obtener el precio del dolar Hoy
let dolarHoy = 1310;
function obtenerDolar (callback){
    //Simulamos que tarda la obtención de los datos

    setTimeout(function(){
        const dataDolar = dolarHoy;
        callback (dataDolar);
    },1000) 
}


let precioProducto = 1500;

//Task3: Obtener el precio de un producto importado
function obtenerPrecio (callback){
    setTimeout (function(){
        const dataPrecio = precioProducto;
        callback (dataPrecio)
    },2000)
}


//Duda? Como haria ahora para convertir la moneda tomando los datos del dolar y de mi saldo actual?

/* function convertirMoneda (data){
//Pasar lo que tengo que mi cuenta a dólares teniendo en cuenta el precio del dolar hoy
    console.log(data*dolarHoy);
}
 */

//obtenerSaldo (convertirMoneda);

//Duda: Cómo sigue para comprobar si puedo o no comprar el producto? Es decir integrar las tres funciones para cumplir una función


//*Implementar una función principal (mainCallback) que llame a estas funciones en secuencia y muestre los resultados en la consola. 

/* function mainCallback (){
    obtenerSaldo (procesarDatos);
    obtenerDolar (procesarDatos);
    obtenerPrecio (procesarDatos);
} */

//DUDA: Sería así? Cómo haría si quiero que muestre cada dato por separado sin tener que armar una función de procesamiento de datos para cada uno de los tipos de datos?

//mainCallback ();

//**Parte 2 : Promesas
//* Convertir las funciones anteriores para que devuelvan promesas.
const promiseSaldo = new Promise ((resolve, reject) => {
    console.log('Promesa Pendiente');

    if (saldo){
        resolve ("Saldo obtenido")
    } else {
         reject ("No se pudo obtener el saldo")
    }
})

promiseSaldo 
    .then(resultado=>{
        console.log(resultado);
    })
    .catch (error =>{
        console.log(error); 
    })
    .finally (()=>{
        console.log('Se obtuvo el saldo');
    })

const promiseDolar = new Promise ((resolve, reject) => {
    console.log('Promesa Pendiente');

    if (dolarHoy){
        resolve ("Dolar obtenido: ")
    } else {
        reject ("No se pudo obtener el precio del dolar")
    }
})

promiseDolar 
    .then(resultado=>{
        console.log(resultado);
    })
    .catch (error =>{
        console.log(error); 
    })
    .finally (()=>{
        console.log('Se obtuvo el dolar');
    })

const promisePrecio = new Promise ((resolve, reject) => {
    console.log('Promesa pendiente');
    
    if (precioProducto){
        resolve ("Precio obtenido")
    } else {
        reject ("No se pudo obtener el precio del producto")
    }
})

promisePrecio
    .then (resultado =>{
        console.log('resultado');
    })
    .catch (error =>{
        console.log(error);
    })
    .finally (()=>{
        console.log('Se obtuvo el precio del producto');
        
    })

//DUDA: Como hago para integrar los tres datos y convertir el saldo a dolar


//* Usar Promise.all para ejecutar todas las funciones en paralelo y mostrar los resultados en la consola. 
Promise.all([promiseSaldo, promiseDolar, promisePrecio])
    .then(resultados=>{
        console.log(resultados);
    })
    .catch(error=>{
        console.log(error);
        
    })
