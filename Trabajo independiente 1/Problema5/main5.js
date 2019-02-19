import Gastos from "./Gastos.js";

let G1 = new Gastos(
    "Kiosko",
    "$350",
    "No.155065",
    "Mauricio Axel Villanueva Cruz",
    `${new Date("2019/02/20")}`);
let G2 = new Gastos (
    "WAL-MART",
    "$500",
    "No.520561",
    "Mauricio Axel Villanueva Cruz",
    `${new Date("2019/02/22")}`);

G1.imprimir();
G2.imprimir();

G2.nombreCliente = "Jose Alvarez Reynaga";

console.log(G1,G2);