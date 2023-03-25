import { Direccion } from "./direccion";
import { Persona } from "./persona";
import { Telefono } from "./telefono";
import { Mail } from "./mail";
/**
 * IDE - Visual Studio Code 1.76.2
 * @author Alessandra-Marie Bayot Diana
 */

/**
 * Se creará un módulo principal (main) en el que se utilicen las clases definidas para crear 3 registros de persona 
 * y mostrarlos en el terminal mediante console.log., utilizando las funciones necesarias definidas en las clases 
 * para obtener los datos.
 */
/**
 * Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono. 
 * Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las clases.
 */

/**
 * Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.
 */
console.log("Menú principal");

/**
 * Se propone realizar unas clases para almacenar la lógica de una agenda con los datos personales de los individuos: 
 * direcciones, teléfonos, mails… Cada clase ha de crearse en un archivo TypeScript diferente.
 */
/**
 * Primer contacto
 */
var dircont1 = new Direccion("Calle inventada",23,1,"A",28000,"Madrid","Madrid");
var mailcont1 = new Mail("email","ab@gmail.com");
var tlfcont1 = new Telefono("movil",666000111);
var contacto1 = new Persona("Alessandra","Bayot",25,"123456789D",11081995,"Rosa","mujer",[dircont1],[mailcont1],[tlfcont1],"primer contacto");
/**
 * Segundo contacto
 */
var dircont2 = new Direccion("Calle de la dirección",5,0,"SN",28050,"Madrid","Madrid");
var mailcont2 = new Mail("email","maria.pepa@gmail.com");
var tlfcont2 = new Telefono("movil",602135789);
var contacto2 = new Persona("Maria","Pepa",30,"987654321Z",11081995,"Negro","mujer",[dircont2],[mailcont2],[tlfcont2],"segundo contacto");
/**
 * Tercer contacto
 * En el tlf tenemos tanto el movil como el de casa
 */
var dircont3 = new Direccion("Calle de la piruleta",8,5,"IZQ",28500,"Madrid","Madrid");
var mailcont3 = new Mail("email","barkyjuan@gmail.com");
var tlfcont3 = new Telefono("movil",666000111);
var tlfcasacont3 = new Telefono("casa",910111222);
var contacto3 = new Persona("Juan","Barky",27,"951654753G",11081995,"Azul","hombre",[dircont3],[mailcont3],[tlfcont3,tlfcasacont3],"tercer contacto");
//se muestra por consola los contactos antes del cambio
console.log("Contactos antes del cambio");
console.log(contacto1);
console.log(contacto2);
console.log(contacto3);

//Genero un array agenda donde guardaremos los contactos/personas
const agenda: Array<Persona> = new Array(contacto1,contacto2,contacto3);
const dniBusqueda: string = "123456789D";

//utilizamos Array.prototype.find() para buscar mediante el dni en la agenda
//se ha tenido que actualizar a ES6 para poder utilizar Array.prototype.find()
const modContacto: Persona = agenda.find(Persona => Persona._dni === dniBusqueda) as Persona;

/**
 * Contacto1
 * Nueva direccion, nuevo mail y nuevo tlf
 * primero los declaramos y luego los agregamos al contacto a modificar que hemos buscado en la agenda por el DNI
 */

var newdircont1 = new Direccion("Calle del distrito",41,1,"A",28000,"Madrid","Madrid");
var newmailcont1 = new Mail("email","alessandra.bayot@gmail.com");
var newtlfcont1 = new Telefono("movil",666111222);
modContacto.agregarDireccion(newdircont1);
modContacto.agregarMail(newmailcont1);
modContacto.agregarTelefono(newtlfcont1);
//mostramos el cambio por la consola
console.log("Se muestra el contacto 1 modificado:");
console.log(contacto1);
console.log("Se muestran los dos contactos sin modificaciones");
console.log(contacto2);
console.log(contacto3);

