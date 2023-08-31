// Passo 1: Importar o módulo 'http' do Node.js
const http = require('http');

// Passo 2: Criar um servidor
// O método createServer() cria um servidor que vai lidar com as solicitações dos clientes.
// Ele recebe uma função de callback que é executada sempre que uma solicitação é recebida.
const server = http.createServer((request, response) => {
  // Passo 3: Configurar a resposta
  // Definir o status da resposta como 200 (OK) e o tipo de conteúdo como 'text/html'.
  response.writeHead(200, {'Content-Type': 'text/html'});

  // Passo 4: Enviar uma resposta para o cliente
  // Enviar o conteúdo "<h1>Ola Denise!</h1>" como resposta.
  response.end('<h1>Ola Denise!</h1>');
});

// Passo 5: Fazer o servidor ouvir uma porta específica
// O método listen() permite que o servidor comece a "ouvir" em uma porta específica.
// Quando isso acontece, a função de callback é executada.
server.listen(3000, () => {
  console.log('O servidor iniciado em http://localhost:3000');
});
