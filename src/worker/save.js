'use strict'

var fs = require('fs')
var path = require('path')

var config = require(path.join(__base, 'configs/config.json'))
var Log = require(path.join(__base, 'src/worker/log.js'))

function Save (name, struct, interval, cb) {
  setInterval(function () {
    fs.writeFile(path.join(config.data.path, name + '.json'), JSON.stringify(struct), 'utf8', cb)
  }, interval)
}

module.exports = Save
