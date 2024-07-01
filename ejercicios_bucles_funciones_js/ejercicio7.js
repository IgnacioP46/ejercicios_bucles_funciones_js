/**
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por consola.
 */
const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Añade tu código de bucle aquí
tracks.sort((a, b) => {//usamos el metodo sort para ordenar los generos agrupandolos en 2 valores genericos
  if (a.genre < b.genre){//si a es menor que b 
    return -1;//le damos valor de -1 dandole una posicion en la lista
  } if (a.genre > b.genre) {//si a es menor que b
    return 1;//nos devuelve valor 1 dandoles otra posicion en la lista
  }
  return 0//en caso de no cumplir nada de lo anterior su valor sera 0 en la lsta
});

console.log(tracks);
/**
[
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },        
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]
 */