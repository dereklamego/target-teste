

var readline = require('readline');

function pertenceAoFibonnacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === numero || numero === 0;
}

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite um número para verificar se ele faz parte da sequência de Fibonacci.\n", (resp) => {
  const numInput = Number(resp);

  if (pertenceAoFibonnacci(numInput)) {
    console.log("Pertence ao fibonnacci")
  } else {
    console.log("Não pertence ao fibonnacci")
  }
  leitor.close();

});




