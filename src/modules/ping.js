'use strict'

var ping = require('ping')

function Ping () {
  this.info = {
    name: 'Ping',
    triggers: ['ping'],
    args: [{
      name: 'Url',
      require: false,
      format: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/
    }]
  }
}

Ping.prototype.run = function (user, args, cb) {
  if (args.length === 0) {
    cb('Pong')
  } else {
    ping.sys.probe(args[0], function (status) {
      status = status ? 'UP' : 'DOWN'
      cb(('`' + args[0] + '` is ' + status + '.'))
    })
  }
}

module.exports = new Ping()
