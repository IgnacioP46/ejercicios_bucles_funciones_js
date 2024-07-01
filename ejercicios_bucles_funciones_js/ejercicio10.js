/*
Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/
const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {//creamos la funcon a la qe le escribimos el nombre y devuelve capital
    // insert code
    return capitals[country] || `¿Has dicho ${country}? Lo siento desconozco tu idioma`;
      }//con la notacion de corchetes accedemos a la seccion country y si existe nos devuelve la capital |O| si no se cumple nos devuelve este mensaje
        
  
    console.log(getCapital('Spain'));// Madrid
    console.log(getCapital('France'));// Paris
    console.log(getCapital('Argentina'));//¿Has dicho Argentina? Lo siento desconozco tu idioma
 