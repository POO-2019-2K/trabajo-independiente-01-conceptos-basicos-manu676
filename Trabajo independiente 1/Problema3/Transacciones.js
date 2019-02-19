export default class Transacciones{
    constructor(numdeTarjeta,nombre, telefono, monto, tipoTarjeta){
        this._numdeTarjeta= numdeTarjeta;
        this._nombre= nombre.toUpperCase();
        this._telefono= telefono;
        this._monto = monto;
        this._tipoTarjeta = tipoTarjeta;
    }

    //lectura
    get numdeTarjeta(){
        return this._numdeTarjeta;
    }
    get nombre(){
        return this._nombre;
    }
    get monto(){
        return this._monto;
    }

    //escritura
    set tipoTarjeta(tipoTarjeta){
        this._tipoTarjeta = tipoTarjeta;
    }
    
    //consola
    imprimir(){
        console.log(`${this._numdeTarjeta}, ${this._nombre}, 
        ${this._telefono}, ${this._monto}, es tarjeta de: ${this._tipoTarjeta}`);
    }

    
}