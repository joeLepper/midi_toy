var midi = require('midi')
  , input = new midi.input()
  , SSE = require('sse')
  , http = require('http')
  , st = require('st')

// input.openPort(0)

var mount = st({ path: __dirname + '/public', url: '/', cache: false })
var server = http.createServer(function (req, res) {
  var handled = mount(req, res)
  if (!handled) res.end('i know nothing.')
})

server.listen(8080, '127.0.0.1', function() {
  var sse = new SSE(server)
  sse.on('connection', function(client) {
    input.on('message', function (deltaT, message) {
      console.log(JSON.stringify(message))
      client.send(JSON.stringify(message))
    })
  })
})

