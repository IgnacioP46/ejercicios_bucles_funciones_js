/**
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.
Imprime el nombre por consola.
 */
const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];
  
  // Añade tu código de bucle aquí
//creamos las variables una para sacar los nombres y la otra para sacar el año de debut con valor del array 0
let oldestCartoonName = cartoons[0].name;
let oldestCartoonDebut = cartoons[0].debut;

for (let i = 1; i < cartoons.length; i++) {//recorremos el array de objeto uno a uno
  if (cartoons[i].debut < oldestCartoonDebut) {//si el apartado debut en la constante carttons entera es menor que la variable oldestCartoonDebut(0)
    oldestCartoonName = cartoons[i].name;//cambiamos el valor de las variables
    oldestCartoonDebut = cartoons[i].debut;
  }
}

console.log(`La serie de dibujos animados más antigua es: ${oldestCartoonName} sacada en el año ${oldestCartoonDebut}`);//La serie de dibujos animados más antigua es: Mickey Mouse sacada en el año 1928