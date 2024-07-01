/**
Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.
Utiliza un bucle para lograrlo e imprime la nueva playlist por consola.
 */
const songs = [
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
  ];
  const rockPlaylist = [];//creamos la constante que rellenaremos luego
  
  // Añade tu código de bucle aquí
  
  for (let i = 0; i < songs.length; i++) {//recorremos el array
    //usamos el condicional con los operadores logicos para darle unos parametros que cumplir
    if (songs[i].genre === 'Rock' && songs[i].duration > 5) {//si toda la constante songs su genero es exacto a Rock Y en toda la constante songs su duracion es mayor que 5
      rockPlaylist.push(songs[i]);//con el metodo push añadimos los datos obtenidos a la constante del array vacio
    }
  }
  
  console.log(rockPlaylist);
  /**
  [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 }
]
   */