const UsuarioControle = require('./controllers/UsuarioControler')
module.exports =[
  {
    endpoint: '/usuarios',
    method: 'GET',
    handler: UsuarioControle.listaDeUsuarios,
  },
]