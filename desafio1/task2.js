//**Parte 2 : Promesas
let saldo = 100;
let dolarHoy = 1310;
let precioProducto = 1500;

//* Convertir las funciones anteriores para que devuelvan promesas.

//Planteo las promesas
const promiseSaldo = new Promise ((resolve, reject) => {
    
    if (saldo){
        resolve (saldo)
    } else {
         reject ("No se pudo obtener el saldo")
    }
})

const promiseDolar = new Promise ((resolve, reject) => {
    if (dolarHoy){
        resolve (dolarHoy); 
    } else {
        reject ("No se pudo obtener el precio del dolar")
    }
})

const promisePrecio = new Promise ((resolve, reject) => {
    console.log('Promesa pendiente');
    
    if (precioProducto){
        resolve (precioProducto)
    } else {
        reject ("No se pudo obtener el precio del producto")
    }
})

//Resuelvo las promesas
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

//* Usar Promise.all para ejecutar todas las funciones en paralelo y mostrar los resultados en la consola. 
Promise.all([promiseSaldo, promiseDolar, promisePrecio])
    .then(resultados=>{
        console.log(resultados);
    })
    .catch(error=>{
        console.log(error);
        
    })