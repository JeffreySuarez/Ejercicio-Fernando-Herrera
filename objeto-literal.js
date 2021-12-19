const personaje = {
  nombre: "tony stark",
  codeName: "Ironman",
  vivo: "false",
  edad: 40,
  coords: {
    lat: 34.034,
    long: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

console.log({ personaje });

//para acceder a las propiedades haremos lo siguiente

let nombre = personaje.nombre;
console.log(nombre);
let edad = personaje.edad;
console.log(edad);
let latitud = personaje.coords.lat;
console.log(latitud);
let trajeMarkV = personaje.trajes[1];
console.log(trajeMarkV);
let numeroTrajesIronman = personaje.trajes.length;
console.log(numeroTrajesIronman);
let ultimoTrajeIronman = personaje.trajes[personaje.trajes.length - 1];
console.log(ultimoTrajeIronman);

//Mas detalles
//si deseo borrar una propiedad

let borrarCoordenadas = delete personaje.edad;
console.log(borrarCoordenadas);
console.log(personaje);

//si deseo que los vares de valores se conviertan en arrays hago lo siguiente

let paresValores = Object.entries(personaje);
console.log(paresValores);

let pos1 = paresValores[1];
console.log(pos1);

let nuevoArreglo = paresValores.forEach((e) => {
  console.log(e);
});

personaje.casado = true;
paresValores.push(["casado", true]);

//hay un detalle con los objetos, que si la creo como una constante, no deberia modificarse nada del objeto pero si deja realizarlo. para dejar congelado el objeto y no se pueda modificar nada realizamos lo siguiente

Object.freeze(personaje);

//ahora si dese eliminar una propiedad de ese objeto no me dejara.

delete personaje.nombre;
console.log(personaje);

//otra propiedad que podemos aprender es si quiero solo las propiedades del objeto en un arreglo.

const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

const valores = Object.values(personaje);
console.log(valores);
