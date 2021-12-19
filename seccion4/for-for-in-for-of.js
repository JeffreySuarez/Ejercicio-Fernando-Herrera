const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("For tradicional");

for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

console.warn("For in");

for (let a in heroes) {
  console.log(heroes[a]);
}

console.warn("for of");

for (let heroe of heroes) {
  console.log(heroe);
}
