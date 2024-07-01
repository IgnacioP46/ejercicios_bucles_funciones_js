/**
Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
Averigua como hallar el año actual en tus cálculos.
 */
const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  function calculateActorsAges(actors) {//recorremos el array
    // insert code
    const currentYear = 2024;//creamos la variable para dar valor al año
    const result = [];//creamos el array vacio que rellenaremos
    
    for (let i = 0; i < actors.length; i++) {//recorremos el array
        const actor = actors[i];//creamos la constante del recorrido del array paso por paso y le damos valor para hacerlo mas manejable
        const age = currentYear - actor.born;//creamos la constante age y le damos el valor de la resta
        result.push({ name: actor.name, age: age });//anadimos el resultado a un array con los datos del nombre y el año
    }
    
    return result;//mostrar resultado
}

const actorsWithAges = calculateActorsAges(actors);//le damos un valor a toda la funcion para hacerla mas manejable
console.log(actorsWithAges);
  /**
   [
  { name: 'Leonardo DiCaprio', age: 50 },
  { name: 'Tom Hanks', age: 68 },
  { name: 'Meryl Streep', age: 75 },
  { name: 'Brad Pitt', age: 61 },
  { name: 'Johnny Depp', age: 61 },
  { name: 'Scarlett Johansson', age: 40 },
  { name: 'Jennifer Lawrence', age: 34 },
  { name: 'Denzel Washington', age: 70 },
  { name: 'Morgan Freeman', age: 87 },
  { name: 'Cate Blanchett', age: 55 }
]
   */