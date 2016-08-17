'use strict'

var assert = require('assert')

function Config () {
}

Config.prototype.load = function (path) {
  var config = require(path)

  assert(config, messageError('config'))

  assert(config.token, messageError('token'))

  assert(config.clientid, messageError('clientid'))

  assert(config.log, messageError('log'))
  assert(config.log.path, messageError('log.path'))

  assert(config.data, messageError('data'))
  assert(config.data.path, messageError('data.path'))

  assert(config.api, messageError('api'))
  assert(config.api.imgur, messageError('api.imgur'))
  assert(config.api.cleverbot, messageError('api.cleverbot'))
  assert(config.api.cleverbot.user, messageError('api.cleverbot.user'))
  assert(config.api.cleverbot.key, messageError('api.cleverbot.key'))

  return config
}

function messageError (field) {
  return 'Config Error: ' + field + ' is missing.'
}
module.exports = Config
