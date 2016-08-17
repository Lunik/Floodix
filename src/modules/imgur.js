'use strict'
var path = require('path')
var imgur = require('imgur-search')

var ImgurWorker = new imgur(__config.api.imgur.key)

function Imgur () {
  this.info = {
    name: 'Imgur',
    triggers: ['imgur'],
    args: [{
      name: 'command',
      require: true,
      format: /.*/
    }]
  }
}

Imgur.prototype.run = function (user, args, cb) {
  if(!__config.api.imgur.active){
    cb('Imgur API desactivated.')
    return
  }
  ImgurWorker.getRandomFromSearch(args.join(' '))
    .then(function (result) {
      cb(result.title + ' ' + result.link)
    })
}

module.exports = new Imgur()
