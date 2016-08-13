'use strict'

var config = require('../configs/config.json')
var Log = require('./log.js')

var fs = require('fs')
var path = require('path')

function Save (name, struct, interval, cb) {
  setInterval(function () {
    fs.writeFile(path.join(config.data.path, name + '.json'), JSON.stringify(struct), 'utf8', cb)
  }, interval)
}

module.exports = Save
