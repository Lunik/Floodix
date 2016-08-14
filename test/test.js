'use strict'

var path = require('path')
var fs = require('fs')

global.__base = path.join(__dirname, '..', '/')
global.__config = require(path.join(__base, 'configs/config.json'))

var assert = require('chai').assert

fs.writeFileSync(path.join(__base, 'data/xp.json'), JSON.stringify({
  '42': {
    'last': new Date(),
    'lvl': 2,
    'missing': 30,
    'xp': 27
  }
}))

describe('Module', function () {
  var modules = [{
    name: 'github',
    user: {},
    args: []
  },
    {
      name: 'help',
      user: {},
      args: []
    },
    {
      name: 'hi',
      user: {},
      args: []
    },
    {
      name: 'imgur',
      user: {},
      args: ['cat']
    },
    {
      name: 'ping',
      user: {},
      args: ['google.fr']
    },
    {
      name: 'rank',
      user: {
        id: '42'
      },
      args: []
    }]

  modules.forEach(function (module) {
    describe(module.name, function () {
      var m = require(path.join(__base, 'src/modules/' + module.name + '.js'))
      describe('run()', function () {
        this.timeout(10000)
        it('Sould return string.', function (done) {
          m.run(module.user, module.args, function (res) {
            assert.typeOf(res, 'string')
            done()
          })
        })
      })
    })
  })
})
