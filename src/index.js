
const http = require('http');
const usuarios = require('./mocks/usuarios'); 

const server = http.createServer((request, response) => {

  // criando o primeiro andpoint, rota de API 
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);
  if(request.url === '/usuarios' && request.method === 'GET'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    // aqui tem que converter o array em uma string
    // dentro do end sempre precisa mandar uma string  
    response.end(JSON.stringify(usuarios));
  }else{
    response.writeHead(404, {'Content-Type': 'text/html'}); 
    response.end(`Cannot ${request.method} ${request.url}`); 
  }


  
});


server.listen(3000, () => console.log('O servidor iniciado em http://localhost:3000'));
