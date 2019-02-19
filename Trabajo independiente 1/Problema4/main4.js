import Consultas from "./Consulta.js";

let R1 = new Consultas(
    "Juan Alvarez",
    "3141091464",
    `${new Date("2019/02/25")}`,
    "");

//fechadellegada
var a = new Date();
var b = new Date("2019/02/25");

let dias = `${b-a}`;
R1.fechaLlegada = `${Math.trunc(((Number(dias)) / 
    (1000*60*60*24)))} días para llegada `;
R1.imprimir();

R1.fechaReservacion = new Date("2019/02/27");
console.log(R1);
