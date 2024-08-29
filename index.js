//**Parte 1: Callbacks

//*Crear tres funciones (task 1, task 2, task 3) que simulen tareas asincrónicas utilizando setTimeout.

//Task1
let saldo = 100;

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

function mainCallback (){
    obtenerSaldo (procesarDatos);
    obtenerDolar (procesarDatos);
    obtenerPrecio (procesarDatos);
}

//DUDA: Sería así? Cómo haría si quiero que muestre cada dato por separado sin tener que armar una función de procesamiento de datos para cada uno de los tipos de datos?

mainCallback ();

