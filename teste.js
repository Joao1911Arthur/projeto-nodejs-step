const fs = require('fs');

const leitura = fs.createReadStream('entrada.txt');
const escrita = fs.createWriteStream('copia.txt');

leitura.pipe(escrita);

escrita.on('finish', () => {
  console.log('Cópia concluída!');
});w