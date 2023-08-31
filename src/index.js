// Importando o módulo http, que permite criar um servidor HTTP
const http = require('http');

// Importando o módulo "rotas" de um arquivo chamado "routes.js"
const rotas = require('./routes');

// Criando um servidor HTTP utilizando o método createServer do módulo http
const server = http.createServer((request, response) => {
  // Exibindo informações sobre a requisição recebida no console
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);
  
  // Procurando uma rota correspondente na array de rotas definida no módulo "rotas"
  const rota = rotas.find((rotaObjetos) => (
    rotaObjetos.endpoint === request.url && rotaObjetos.method === request.method
  ));
  
  // Verificando se a rota foi encontrada
  if (rota) {
    // Se a rota foi encontrada, chamando o manipulador (handler) da rota
    rota.handler(request, response);
  } else {
    // Se a rota não foi encontrada, retornando uma resposta 404
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method} ${request.url}`);
  }
});

// Fazendo o servidor escutar a porta 3000 e exibindo uma mensagem quando iniciado
server.listen(3000, () => console.log('O servidor iniciado em http://localhost:3000'));
