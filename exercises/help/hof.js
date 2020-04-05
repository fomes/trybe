// Higher Order Functions
// array de elementos usado em todos os exemplos abaixo - array
// descomentar a linha abaixo do exemplo para ver o resultado de cada function no console

const array = [15, 25, 30, 20, 10]

// forEach - percorre o array, executar uma função passada como parâmetro e não retorna nenhum valor.

const mult = (n) => {
  console.log(n * 2);
}

// array.forEach(mult);


// --------------------------------------------------------------------------------------------------
// find - encontra o primeiro elemento que satisfaz a função passada como parâmetro. - A função deve retornar ture ou false;

const pares = (n) => {
  return n % 2 === 0;
}

const par = array.find(pares);

// console.log(par);

// --------------------------------------------------------------------------------------------------
// some - retorna true se pelo menos um elemento de um array satisfazer a condição

const somePar = array.some(pares);

// console.log(somePar);

// --------------------------------------------------------------------------------------------------
// every - retorna true se todos os elementos satisfazerem uma condição

const everyPar = array.every(pares);

// console.log(everyPar);


// --------------------------------------------------------------------------------------------------
// sort - ordena um array de acordo com o critério informado como parâmetro

const ordem = array.sort((a, b) => a - b);

// console.log(ordem);

// --------------------------------------------------------------------------------------------------
// filter - retorna todos os elementos do array que satisfazem a condição verificada pela função

const filtro = array.filter(pares);

// console.log(filtro);

// --------------------------------------------------------------------------------------------------
// map - sempre retorna um novo array sem modificar um original

const mapa = array.map(pares);

// console.log(mapa);


// --------------------------------------------------------------------------------------------------
// reduce - recebe dois parâmetros, um acumulador(result) e o elmento de cada array(element), bom para retornar soma de valores.
// seu retorno é algo como: result = result + element;

const soma = array.reduce((result, element) => result + element);

// console.log(soma);


// O exemplo abaixo também faz a soma porém com o acumulador inicializado com valor zero;

  // const getSoma = (result, element) => {
  //   return result + element;
  // }
  
  // const soma = array.reduce(getSoma, 0); // valor zero inicializado, porém nada muda no retorno da função

  // console.log(soma);
