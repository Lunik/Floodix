'use strict'

var fs = require('fs')
var path = require('path')

/**
 *  Log manager.
 * @constructor
*/
function Log () {}

/**
 *  Write log into .txt and log it on the screen.
 * @param {string} text - Text to log.
*/
Log.prototype.print = function (text, cb) {
  var self = this
  self.echo(text)
  fs.appendFile(path.join(__config.log.path, 'log-' + (new Date()).getDate() + '-' + ((new Date()).getMonth() + 1)), '[' + getDate() + '] ' + text + '\n', 'utf8', function (err) {
    if (err) throw err
    if (cb) {
      cb()
    }
  })
}

/**
 *  Write log on the screen.
 * @param {string} text - Text to log.
*/
Log.prototype.echo = function (text) {
  console.log(text)
}

function getDate () {
  var date = new Date()
  return date.getDate() + '/' + (date.getMonth() + 1) + ' ' + (date.getHours() + 1) + ':' + (date.getMinutes() + 1) + ':' + (date.getSeconds() + 1)
}

module.exports = new Log()
