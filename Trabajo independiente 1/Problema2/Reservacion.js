export default class Reservacion
{
    constructor(nombre, mesa, telefono, fechaReservacion, fechaLlegada){
        this._nombre = nombre.toUpperCase();
        this._mesa = mesa;
        this._telefono = telefono;
        this._fechaReservacion = fechaReservacion;
        this._fechaLlegada= fechaLlegada;
    }

    //Lectura
    get nombre(){
        return this._nombre.toUpperCase();
    }
    get mesa(){
        return this._mesa;
    }
    get telefono(){
        return this._telefono
    }
    get fechaReservacion(){
        return this._fechaReservacion;
    }
    get fechaLlegada(){
        return this._fechaLlegada;
    }

    //Escritura
    set fechaLlegada(fechaLlegada){
        this._fechaLlegada = fechaLlegada;
    }

    //consola
    imprimir() {
        console.log(`${this._nombre}, ${this._mesa}, 
        ${this._telefono}, ${this._fechaReservacion}
        ,${this._fechaLlegada}`);
    }
}
