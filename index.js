
const http = require('http');

const produtos = [
  'Computador',
  'Mouse',
  'Teclado',
  'Monitor',
  "Fone de Ouvido",
  "RTX 5090"
];

const server = http.createServer((req, res) => {
  const listaProdutos = produtos
    .map((produto) => `<li>${produto}</li>`)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Teste Node.js</title>
    </head>
    <body>
      <h1>Lista gamer extremamente nescessaria</h1>

      <ul>
        ${listaProdutos}
      </ul>
    </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
    