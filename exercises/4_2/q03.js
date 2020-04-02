// Felipe Gomes de Luna 
// Turma 03
// Exercício 03 - 4.2

let n = 5;
let ast = '*';
let esp = ' ';

for(i=1; i<n; i++){
    esp+= ' ';
}

for(i=1; i<n; i++){
    ast+= '*';
}

for(i=0; i<=n; i++){
    console.log(esp+ast.substring(0,i));
    esp=esp.substring(0,n-i-1);
}