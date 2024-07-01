/**
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.
 */
const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis', power: 'telepathy'},
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {//definimos la funcion
    // insert code
    //creamos una constante y la recorremos entera, le damos el valor de mutant a todos los mutantes que sean exactamente igual al paramatro que le hemos dado
      const foundMutants = mutants.filter(mutant => mutant.power === power);
    if (foundMutants.length > 0) {//si la constante que acabamos de crear recorrida entera es mayor que 0(true)
      return `Mutantes encontrados: ${foundMutants.map(mutant => mutant.name).join(', ')}`;//nos devuelve el mensaje(buscamos con .map en la constante mutant que contiene el objeto mutants sacamos la parte del objeto que tiene el apartado name y su valor separados por comas con el separador .join)
    } else {//si no se cumple
      return 'Mutante no encontrado';//devuelve ese mensaje
    }
  }
  console.log(findMutantByPower(mutants, 'telepathy'));//Mutantes encontrados: Professor X, Jean Grey