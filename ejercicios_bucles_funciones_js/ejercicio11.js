/*
Escribe una función que calcule el promedio de duración de una lista de películas.
Recibe un array de películas, cada una con su duración en minutos.
La función debe devolver el promedio de duración de todas las películas.
*/
const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {
    // insert code
    let totalDuration = 0;//creamos la variable con valor 0
  for (let i = 0; i < movies.length; i++) {//recorremos el array
    totalDuration += movies[i].duration;//sacamos la suma de todos los minutos y se lo asignamos como nuevo valor de totalDuration
  }
  return totalDuration / movies.length;//nos devuelve la division de la suma de los minutos entre todas las peliculas dentro del array para darnos el promedio de duracion
}
  
const averageDuration = averageMovieDuration(movies);//guardamos el resultado en una constante para hacerlo mas manejable
console.log(averageDuration);//139
 
