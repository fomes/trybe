// nome = "Felipe";
var a1, a2;

function verPalindromo(nome=[]){
    for(let i in nome){
        a1 = a1 + nome[i];
        a2 = a2 + nome[nome.length-i];
    }
    return a2;
}

console.log(verPalindromo("Felipe"));
