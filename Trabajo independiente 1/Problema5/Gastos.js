export default class Gastos{
    constructor(tienda,monto, numTicket, nombreCliente, fechaCompra){
        this._tienda= tienda;
        this._monto= monto;
        this._numTicket= numTicket;
        this._nombreCliente = nombreCliente;
        this._fechaCompra = fechaCompra;
    }

    //lectura
    get tienda(){
        return this._tienda;
    }
    get monto(){
        return this._monto;
    }
    get fechaCompra(){
        return this._fechaCompra
    }

    //escritura
    set nombreCliente(nombreCliente){
        this._nombreCliente = nombreCliente;
    }
    
    //consola
    imprimir(){
        console.log(`${this._tienda},${this.monto} ${this._numTicket}, 
        ${this._nombreCliente}, ${this._fechaCompra}`);
    }

    
}