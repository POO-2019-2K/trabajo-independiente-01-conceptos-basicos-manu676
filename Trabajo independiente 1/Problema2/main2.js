import Reservaciones from "./Reservacion.js";

let R1 = new Reservaciones(
    "Juan Alvarez",
    55,
    "3141091464",
    `${new Date("2019/02/25")}`,
    "");

//fechadellegada
let a = new Date();
let b = new Date("2019/02/25");

let dias = `${b-a}`;
R1.fechaLlegada = `${Math.trunc(((Number(dias)) / 
    (1000*60*60*24)))} días para llegada `;
R1.imprimir();
