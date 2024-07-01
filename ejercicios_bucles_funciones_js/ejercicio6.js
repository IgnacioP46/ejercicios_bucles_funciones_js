/**
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola.
 */
const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];

  // Añade tu código de bucle aquí
  const moviesByDecade = {};//creamos la constante del objeto a rellenar con las constantes por decadas
  
  for (let i = 0; i < starWarsMovies.length; i++) {//recorremos el objeto starWarsMovies dato a dato
    const movie = starWarsMovies[i];//lo metemos en una variable para que sea mas manejable
    const decade = Math.floor(movie.releaseYear / 10) * 10;//creamos la constante, susamos Math.floor para sacar el maximo entero de las pelis divididos entre 10 y ese resultado lo multiplicamos por 10 para sacar la decada de cada pelicula

  //
    if (!moviesByDecade[decade]) {//si no existe una entrada para alguna decada
      moviesByDecade[decade] = [];//lo creamos aqui
    }
  
    moviesByDecade[decade].push(movie);// Añadimos la película actual a la lista de películas de su década correspondiente
  }
  
  console.log(moviesByDecade);
  /**
  {
  '1970': [ { title: 'A New Hope', releaseYear: 1977 } ],
  '1980': [
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 }
  ],
  '1990': [ { title: 'The Phantom Menace', releaseYear: 1999 } ],
  '2000': [
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 }
  ],
  '2010': [
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ]
}
   */