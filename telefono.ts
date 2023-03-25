/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * class Teléfono
 */


export class Telefono{
    //instanciamos los attb
    _tipo:string;
    _numero:number;

    /**
     * Constructor
     */
    constructor(tipo:string,numero:number){
        this._tipo=tipo;
        this._numero=numero;
    }

    /**
     * Setters
     * Indicaremos que por lo menos no se encuentre vacío
     */
    set tipotlf(tipo:string){
        if(tipo==null){
            throw new Error("Debe indicar que tipo de teléfono es por favor. movil o fijo");
        }else if(tipo=="movil"){
            this._tipo=tipo;
        }else if(tipo=="fijo"){
            this._tipo=tipo;
        }else{
            //al no figurar en las opciones genera un error
            throw new Error("Debe indicar que tipo de teléfono es por favor. movil o fijo");
        }
    }
    set numerotlf(numero:number){
        if(numero==null){
            throw new Error("Debe indicar el numero de teléfono por favor");
        }
    }


    /**
     * Getters
     */
    get tipoTlf():string{
        return this._tipo;
    }
    get numeroTlf():number{
        return this._numero;
    }
}