/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * clase Dirección
 */
export class Direccion {
    /**
     * Constructor
     */
    constructor(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    /**
     * Setters
     */
    set calle(calle) {
        if (calle == null) {
            throw new Error("Debe indicar la calle por favor");
        }
        this._calle = calle;
    }
    set numero(numero) {
        if (numero == null) {
            throw new Error("Debe indicar el número de la calle por favor");
        }
        this._numero = numero;
    }
    set piso(piso) {
        if (piso == null) {
            throw new Error("Indique el piso de la dirección por favor");
        }
        this._piso = piso;
    }
    set letra(letra) {
        if (letra == null) {
            throw new Error("Debe indicar la letra del piso, en caso de no tener por favor indique SL");
        }
        this._letra = letra;
    }
    set cp(cp) {
        if (cp == null) {
            throw new Error("Debe indicar por favor el codigo postal");
        }
        this._cp = cp;
    }
    set poblacion(poblacion) {
        if (poblacion == null) {
            throw new Error("Debe indicar la poblacion por favor");
        }
        this._poblacion = poblacion;
    }
    set provincia(provincia) {
        if (provincia == null) {
            throw new Error("Debe indicar la provincia por favor");
        }
        this._provincia = provincia;
    }
    /**
     * Getters
     */
    get Calle() {
        return this._calle;
    }
    get Numero() {
        return this._numero;
    }
    get Piso() {
        return this._piso;
    }
    get Letra() {
        return this._letra;
    }
    get CP() {
        return this._cp;
    }
    get Poblacion() {
        return this._poblacion;
    }
    get Provincia() {
        return this._provincia;
    }
    /**
     * mostrar datos
     */
    mostrarDireccion() {
        console.log(this.Calle, this.Numero, this.Piso, this.Letra, this.CP, this.Poblacion, this.Provincia);
    }
}
