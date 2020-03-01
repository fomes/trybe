// Felipe Gomes de Luna 
// Turma 03
// Exercício 02 - 4.2

let n = 5;
let ast = '*';

for(i=1; i<n; i++){
    ast+= '*';
}

for(i=1; i<=n; i++){
    console.log(ast.substring(0,i));
}