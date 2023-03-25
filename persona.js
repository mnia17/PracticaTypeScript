/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 * clase Persona
 */
export class Persona {
    /**
     * Constructor
     */
    constructor(nombre, apellidos, edad, dni, cumpleanyos, colorFav, sexo, direccion, mail, tlf, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanyos = cumpleanyos;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._tlf = tlf;
        this._notas = notas;
    }
    /**
     * Setters
     * Indicaremos que debe por lo menos ser rellenado por el usuario, sino se mostrará un error
     */
    set nombre(nombre) {
        if (nombre == null) {
            throw new Error("Debe indicar el nombre");
        }
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        if (apellidos == null) {
            throw new Error("Debe indicar al menos un apellido");
        }
        this._apellidos = apellidos;
    }
    set edad(edad) {
        if (edad == null) {
            throw new Error("Debe indicar la edad");
        }
        this._edad = edad;
    }
    set Dni(dni) {
        if (dni == null) {
            throw new Error("Debe indicar el DNI");
        }
        this._dni = dni;
    }
    set Cumple(cumpleanyos) {
        if (cumpleanyos == null) {
            throw new Error("Debe indicar la fecha de cumpleaños");
        }
        this._cumpleanyos = cumpleanyos;
    }
    set colorFavorito(colorFav) {
        if (colorFav == null) {
            throw new Error("Debe indicar el color favorito por favor");
        }
        this._colorFav = colorFav;
    }
    //indicaremos que el sexo debe ser hombre o mujer
    set Sexo(sexo) {
        if (sexo == null) {
            throw new Error("Debe indicar el sexo, mujer o hombre");
        }
        else if (sexo == "mujer") {
            this._sexo = sexo;
        }
        else if (sexo == "hombre") {
            this._sexo = sexo;
        }
        else {
            throw new Error("Debe indicar si es hombre o mujer por favor");
        }
    }
    set Direccion(direccion) {
        if (direccion == null) {
            throw new Error("Debe indicar la direccion por favor");
        }
        this._direccion = direccion;
    }
    set Mail(mail) {
        if (mail == null) {
            throw new Error("Debe indicar el Mail por favor");
        }
        this._mail = mail;
    }
    set Telef(tlf) {
        if (tlf == null) {
            throw new Error("Debe indicar por favor un tlf");
        }
        this._tlf = tlf;
    }
    set Notas(notas) {
        //en este caso las notas son opcionales por lo que no pondremos una condicion para saber si el usuario indica algo o no
        this._notas = notas;
    }
    /**
     * Getters
     */
    get Nombre() {
        return this._nombre;
    }
    get Apellido() {
        return this._apellidos;
    }
    get Edad() {
        return this._edad;
    }
    get Dni() {
        return this._dni;
    }
    get Cumpleanyos() {
        return this._cumpleanyos;
    }
    get ColorFav() {
        return this._colorFav;
    }
    get Sexo() {
        return this._sexo;
    }
    get Direccion() {
        return this._direccion;
    }
    get Mail() {
        return this._mail;
    }
    get Tlf() {
        return this._tlf;
    }
    get Notas() {
        return this._notas;
    }
    /**
     * mostrar datos
     */
    mostrarDatos() {
        console.log(this.Nombre, this.Apellido, this.Edad, this.Dni, this.Cumpleanyos, this.ColorFav, this.Sexo, this.Direccion, this.Mail, this.Tlf, this.Notas);
    }
    /**
     * Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono.
     * Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las clases.
     */
    //Array.prototype.push() The push() method adds one or more elements to the end of an array and returns the new length of the array.
    agregarDireccion(direccion) {
        this._direccion.push(direccion);
    }
    agregarTelefono(telefono) {
        this._tlf.push(telefono);
    }
    agregarMail(mail) {
        this._mail.push(mail);
    }
}
