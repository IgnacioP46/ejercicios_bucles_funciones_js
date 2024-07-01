/**
Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.
Imprime este nuevo array por consola.
 */
const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
  ];
  const humanCharacters = [];//creamos la constante con valor vacio que tenemos que rellenar
  
  // Añade tu código de bucle aquí
  for (let i = 0; i < characters.length; i++) {//recorremos con for todo el objeto valor por valor
    if (characters[i].species === 'Human') {//si el paraetro species dentro del objeto charaters es exactamente igual a Human
      humanCharacters.push(characters[i]);//a la constante humanCharacters usamos el metodo push añadimos los elementos que nos ha filtrado el condicional if
    }
  }
  
  console.log(humanCharacters);
  /**
  [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },   
  { name: 'Leia Organa', species: 'Human' },   
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Han Solo', species: 'Human' }       
]
   */