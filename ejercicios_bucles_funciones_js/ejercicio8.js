/**
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.
 */

const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];
  
  // Añade tu código de bucle aquí

  for (let i = 0; i < artists.length; i++) {//iteramos o recorremos el array 
    const artist = artists[i];//le damos un nuevo valor
      for (let j = 0; j < artist.influences.length; j++){//iteramos el nuevo valor del array la parte que contiene influeces
        const influence = artist.influences[j];//le damos un nuevo valor
        console.log(`${artist.name} -> ${artist.influences}`);//le decimos como queremos que imprima el resultado
      }
  }
  /**
  Kurt Cobain -> The Beatles,Pixies,Lead Belly
Kurt Cobain -> The Beatles,Pixies,Lead Belly
Kurt Cobain -> The Beatles,Pixies,Lead Belly
David Bowie -> Little Richard,Chuck Berry,The Velvet Underground
David Bowie -> Little Richard,Chuck Berry,The Velvet Underground
David Bowie -> Little Richard,Chuck Berry,The Velvet Underground
Eddie Vedder -> The Who,Neil Young,Jim Morrison
Eddie Vedder -> The Who,Neil Young,Jim Morrison
Eddie Vedder -> The Who,Neil Young,Jim Morrison
Freddie Mercury -> Liza Minnelli,Jimi Hendrix,Aretha Franklin
Freddie Mercury -> Liza Minnelli,Jimi Hendrix,Aretha Franklin
Freddie Mercury -> Liza Minnelli,Jimi Hendrix,Aretha Franklin
John Lennon -> Elvis Presley,Chuck Berry,Buddy Holly
John Lennon -> Elvis Presley,Chuck Berry,Buddy Holly
John Lennon -> Elvis Presley,Chuck Berry,Buddy Holly
   */