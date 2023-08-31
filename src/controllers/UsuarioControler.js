const usuarios = require('../mocks/usuarios'); 
 module.exports={
  listaDeUsuarios(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(JSON.stringify(usuarios));
  },
 };