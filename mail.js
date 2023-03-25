/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * class Mail
 */
export class Mail {
    /**
     * Constructor
     */
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    /**
     * Setters
     * Indicaremos que por lo menos no se encuentre vacío
     */
    set tipomail(tipo) {
        if (tipo == null) {
            throw new Error("Debe indicar que tipo de teléfono es por favor. movil o fijo");
        }
        this._tipo = tipo;
    }
    set direccionmail(direccion) {
        if (direccion == null) {
            throw new Error("Debe indicar el numero de teléfono por favor");
        }
    }
    /**
     * Getters
     */
    get tipomail() {
        return this._tipo;
    }
    get direccionmail() {
        return this._direccion;
    }
}
