const json_server = require('json-server')
const server = json_server.create()
const router = json_server.router('db.json')
const middleware = json_server.defaults()
const port = process.env.PORT || 3001
server.use(middleware)
server.use(router)
server.listen(port,() => {
    console.log('listening on port ' + port);
})