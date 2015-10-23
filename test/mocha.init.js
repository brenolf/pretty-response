'use strict'

var chai = require('chai')

var sinon = require('sinon')

chai.use(require('sinon-chai'))

global.sinon = sinon

global.expect = chai.expect
