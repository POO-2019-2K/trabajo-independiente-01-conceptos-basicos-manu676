import Transacciones from "./Transacciones.js"

let T1  = new Transacciones(
    "****-****-****-5213",
    "Juan Perez",  
    "3141091464",
    "$5000.00", 
    "Credito");

T1.imprimir();

T1.tipoTarjeta = "Debito";
console.log(T1);

T1.imprimir();