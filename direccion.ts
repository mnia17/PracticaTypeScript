/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * clase Dirección
 */


export class Direccion{
    //instanciamos los attb
     _calle:string;
     _numero:number;
     _piso:number;
    _letra:string;
    _cp:number;
    _poblacion:string;
    _provincia:string;

    /**
     * Constructor
     */
    constructor(calle:string,numero:number,piso:number,letra:string,cp:number,poblacion:string,provincia:string){
        this._calle=calle;
        this._numero=numero;
        this._piso=piso;
        this._letra=letra;
        this._cp=cp;
        this._poblacion=poblacion;
        this._provincia=provincia;
    }

    /**
     * Setters
     */
    set calle(calle:string){
        if(calle==null){
            throw new Error("Debe indicar la calle por favor");
        }
        this._calle=calle;
    }
    set numero(numero:number){
        if(numero==null){
            throw new Error("Debe indicar el número de la calle por favor");
        }
        this._numero=numero;
    }
    set piso(piso:number){
        if(piso==null){
            throw new Error("Indique el piso de la dirección por favor");
        }
        this._piso=piso;
    }
    set letra(letra:string){
        if(letra==null){
            throw new Error("Debe indicar la letra del piso, en caso de no tener por favor indique SL");
        }
        this._letra=letra;
    }
    set cp(cp:number){
        if(cp==null){
            throw new Error("Debe indicar por favor el codigo postal");
        }
        this._cp=cp;
    }
    set poblacion(poblacion:string){
        if(poblacion==null){
            throw new Error("Debe indicar la poblacion por favor");
        }
        this._poblacion=poblacion;
    }
    set provincia(provincia:string){
        if(provincia==null){
            throw new Error("Debe indicar la provincia por favor");
        }
        this._provincia=provincia;
    }


    /**
     * Getters
     */
    get Calle():string{
        return this._calle;
    }
    get Numero():number{
        return this._numero;
    }
    get Piso():number{
        return this._piso;
    }
    get Letra():string{
        return this._letra;
    }
    get CP():number{
        return this._cp;
    }
    get Poblacion():string{
        return this._poblacion
    }
    get Provincia():string{
        return this._provincia;
    }
    /**
     * mostrar datos
     */
    mostrarDireccion():void{
        console.log(this.Calle,this.Numero,this.Piso,this.Letra,this.CP,this.Poblacion,this.Provincia);
    }

}