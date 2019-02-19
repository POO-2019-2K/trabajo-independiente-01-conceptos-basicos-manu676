export default class Consulta{
    constructor(nombre, telefono, fechaReservacion, fechaLlegada){
        this._nombre = nombre.toUpperCase();
        this._telefono = telefono;
        this._fechaReservacion = fechaReservacion;
        this._fechaLlegada= fechaLlegada;
    }

    //Lectura
    get nombre(){
        return this._nombre.toUpperCase();
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
    set nombre(nombre){
        this._nombre = nombre;
    }
    set fechaReservacion(fechaReservacion){
        this._fechaReservacion = fechaReservacion
    }
    set fechaLlegada(fechaLlegada){
        this._fechaLlegada = fechaLlegada;
    }

    //consola
    imprimir() {
        console.log(`${this._nombre}, 
        ${this._telefono}, ${this._fechaReservacion}
        ,${this._fechaLlegada}`);
    }
}