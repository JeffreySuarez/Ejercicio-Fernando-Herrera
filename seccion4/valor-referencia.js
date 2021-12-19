// observaremos un caso especial, observamos que tenemos una variable llamada peter que tiene como valor un objeto, ahora creamos otra variable llamada tony que le decimos que tiene como valor a peter. Eso hace que los dos tengan como variable un objeto nombre: peter.  Ahora si a tony le quiero cambiar el nombre de peter a juan, pasa que me lo cambia a todos, y es una falla, ya que los objetos se cambian por referencia, para solucionar esto usaremos el operador spread operator como si compiaramos un objeto.

let peter = { nombre: "peter" };
let tony = peter;

tony.nombre = "juan";

console.log(peter);
console.log(tony);

//uso del spread operator en el caso anterior.

let peter1 = { apellido: "suarez" };
let tony1 = { ...peter1 };

tony1.apellido = "Alvarez";

console.log(peter1);
console.log(tony1);

//observamos que se soluciono el problema. ahora lo usaremos en una funcion.

function cambiarNombre({ ...persona }) {
  persona.nickName = "pedro";
  return persona;
}

let peter2 = { nickName: "Ironman" };
let tony2 = cambiarNombre(peter2);

console.log({ peter2, tony2 });

//si en la funcion no colocamos llaves quedaria no como un spread operator si no como un rest, eso significaria que uniria todos los argumentos y muestrelo como un arreglo, por eso es importante colocar llaves para este ejemplo

//ahora usaremos arreglos

const frutas = ["Manzana", "Pera", " Piñá"];

const otrasFrutas = [...frutas];

otrasFrutas.push("Mango");

console.log(frutas);
console.log(otrasFrutas);
