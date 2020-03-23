$(document).ready(function(){
  $('#cpf').mask('999.999.999-99');
});

let estados = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

function criaEstados() {
  for (let i in estados) {
    let opc = document.createElement('option');
    document.getElementById('estados').appendChild(opc);
    opc.innerHTML = estados[i];
  }
}

criaEstados();

// validation
function validation(){
  let name = document.getElementById('name').value;
  alert(name);
}
