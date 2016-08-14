'use strict'
var path = require('path')
var imgur = require('imgur-search')

var config = require(path.join(__base, 'configs/config.json'))

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
  if(config.api.imgur === ''){
    cb('You need an Imgur API key. See here to get one https://api.imgur.com/oauth2/addclient.')
    return
  }
  var Imgur = new imgur(config.api.imgur)
  Imgur.getRandomFromSearch(args.join(' '))
  .then(function(result){
    cb(result.title + ' ' + result.link)
  })
}

module.exports = new Imgur()
