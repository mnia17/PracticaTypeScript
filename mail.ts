/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * class Mail
 */

export class Mail{
    //instanciamos los attbs
    _tipo:string;
    _direccion:string;

    /**
     * Constructor
     */
    constructor(tipo:string,direccion:string){
        this._tipo=tipo;
        this._direccion=direccion;
    }

    /**
     * Setters
     * Indicaremos que por lo menos no se encuentre vacío
     */
    set tipomail(tipo:string){
        if(tipo==null){
            throw new Error("Debe indicar que tipo de teléfono es por favor. movil o fijo");
        }
        this._tipo=tipo;
    }
    set direccionmail(direccion:string){
        if(direccion==null){
            throw new Error("Debe indicar el numero de teléfono por favor");
        }
    }
    /**
     * Getters
     */
    get tipomail():string{
        return this._tipo;
    }
    get direccionmail():string{
        return this._direccion;
    }
}