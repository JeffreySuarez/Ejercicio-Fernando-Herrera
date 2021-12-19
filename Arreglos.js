let videoJuegos = ["Mario 3", "Megaman", "Chrono Triguer"];
console.log({ videoJuegos });
console.log(videoJuegos[0]);

let arregloCosas = [true, 123, "Jeffrey", 1 + 2];
console.log({ arregloCosas });

let juegos = ["piratas", "parche", "militar", 123];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(primero);
console.log(ultimo);

juegos.forEach((elemento, indice, arreglo) => {
  console.log({ elemento, indice, arreglo });
});

juegos.push("F-Zero");

console.log({ juegos });

juegos.unshift("Fire Emblem");

console.log({ juegos });

let extraerElemento = juegos.pop();

console.log({ extraerElemento });

console.log({ juegos });

//una de las formas para extraer un valor que no sea el inicio o el final de un array es utilizando el metodo splice.
// el metodo splice recibe dos parametros.  El primero indica la posicion a iniciar y el segundo parametro cuandos elementos voy a extraer o borrar del arreglo.

let pos = 1;

console.log(juegos);

let juegosBorrado = juegos.splice(pos, 9);

console.log(juegosBorrado);

//Ahora hay otro metodo que me indica en que posicion se encuentra un elemento equis del array. Si yo deseo conocer en que posicion esta un elemento utilizo el siguiente metodo.

let juegosII = ["Mario", "Princes", "Luigi", "yoshi", "king"];
let marioIndex = juegosII.indexOf("yoshi");
console.log(marioIndex);
