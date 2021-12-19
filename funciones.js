function saludar() {
  console.log("Hola");
}

saludar();

for (let i = 0; i < 5; i++) {
  saludar();
}

const getAleatorio2 = () => Math.random();

console.log("Numeros aleatorios " + getAleatorio2());

//protips

function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPersona("Jeffrey", "Suarez");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "hola");

const tony = {
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

const imprimirPropiedades = ({ nombre, codeName, edad, vivo, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ edad });
  console.log({ vivo });
  console.log({ trajes });
};

imprimirPropiedades(tony);
