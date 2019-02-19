export default class Empleados{
    constructor(numdeTrabajador,nombre, puesto, fechaIngreso){
        this._numdeTrabajador= numdeTrabajador;
        this._nombre= nombre.toUpperCase();
        this._puesto= puesto;
        this._fechaIngreso = Date(fechaIngreso);
    }

    //lectura
    get numdeTrabajador(){
        return this._numdeTrabajador;
    }
    get nombre(){
        return this._nombre;
    }
    get puesto(){
        return this._puesto;
    }

    //escritura
    set puesto(puesto){
        this._puesto = puesto;
    }
    
    //consola
    imprimir(){
        console.log(`${this._numdeTrabajador}, ${this._nombre}, 
        ${this._puesto}, ${this._fechaIngreso}`);
    }

    
}