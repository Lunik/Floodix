'use strict'

var fs = require('fs')
var path = require('path')

var Log = require(path.join(__base, 'src/worker/log.js'))

function Save (name, struct, interval, cb) {
  setInterval(function () {
    fs.writeFile(path.join(__config.data.path, name + '.json'), JSON.stringify(struct), 'utf8', cb)
  }, interval)
}

module.exports = Save
