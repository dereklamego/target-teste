const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question('digite uma string:', (inputString) => {

  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  console.log('string invertida:', reversedString);

  leitor.close();
});