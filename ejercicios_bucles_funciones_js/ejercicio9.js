/**
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
Utiliza este array para probar tu función.
 */
const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {//creamos una funcion para sacar el mas antiguo
    // insert code
    
    const menorAño = Math.min(...xMen.map(person => person.year));//creamos un array solo con los años, sacamos loa años como elementos individuales, y con mat.min sacamos el mas pequeño
    const oldestXMen = xMen.filter(person => person.year === menorAño);//crea un array con los nombres que su año sea identico al de menorAño
    return oldestXMen;//retorna el primer nombre que coincida y para
  }
  
  const oldestXMen = findOldestXMen(xMen);//guardamos el valor en la constante para hacerloo mas manejable

  console.log(oldestXMen);
  /**
  [
  { name: 'Cyclops', year: 1963 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 }
]
   */