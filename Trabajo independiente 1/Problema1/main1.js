import Empleados from "./Empleados.js";

let E1 = new Empleados (
    123, 
    "Juan Perez", 
    "Operador de maquinaria", 
    "");
let E2 = new Empleados(
    510,
    "Mauricio Villanueva",
    "Administrador de cobranza",
    "");
    
   E1.imprimir();
   E2.imprimir();

   E1.puesto= "Cajero";
   console.log(E1);