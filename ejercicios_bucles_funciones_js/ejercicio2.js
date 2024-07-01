/**
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
Imprime ambos conteos por consola.
 */
const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  // Añade tu código de bucle aquí
let before2000Count = 0;//creamos la variable con valor 0 para operar con ella
let after2000Count = 0;//creamos la variable con valor 0 para operar con ella

for (let i = 0; i < movies.length; i++) {//recorremos en objeto dato a dato
  if (movies[i].releaseYear < 2000) {//si en la constante creada con for movies recorrida entera[i] sacamos el valor releaseYear y este es menor al 2000
    before2000Count++;//cambiamos la variable sumandole todos los resultados sacados
  } else {//si no se cumple y es mayor al año 2000
    after2000Count++;//se suman los valores nuevos a esta otra variable
  }
}

console.log(`Películas antes del año 2000: ${before2000Count}`);//Películas antes del año 2000: 7
console.log(`Películas del año 2000 o posteriores: ${after2000Count}`);//Películas del año 2000 o posteriores: 3
