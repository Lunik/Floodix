'use strict'

var fs = require('fs')
var path = require('path')

var pack = require(path.join(__base, 'package.json'))

function Version () {
  this.info = {
    name: 'Version',
    triggers: ['version'],
    args: []
  }
}

Version.prototype.run = function (user, args, cb) {
  var version = function(){
    return 'v' + pack.version
  }
  cb(version())
}

module.exports = new Version()
