/*
 * pretty-response
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var codes = require('./pretty-response/codes')

module.exports = function (request, response, next) {
  for (var code in codes) {
    response[codes[code]] = response.status.bind(response, parseInt(code))
  }

  next()
}
