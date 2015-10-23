# Pretty Response

[![Build Status](https://travis-ci.org/brenolf/pretty-response.svg)](https://travis-ci.org/brenolf/pretty-response)
[![Coverage Status](https://coveralls.io/repos/brenolf/pretty-response/badge.svg?branch=master&service=github)](https://coveralls.io/github/brenolf/pretty-response?branch=master)
[![Code Climate](https://codeclimate.com/github/brenolf/pretty-response/badges/gpa.svg)](https://codeclimate.com/github/brenolf/pretty-response)
[![npm version](https://badge.fury.io/js/pretty-response.svg)](http://badge.fury.io/js/pretty-response)
> Express middleware that exposes function to work with HTTP status codes

Pretty Response exposes all HTTP codes as functions on response as a middleware. So you can plug it wherever you want to and have a more expressive code than using standard `response.status(CODE)`.

## Install
`$ npm install --save-dev pretty-response`

## Usage
```js
var express = require('express')
var pretty = require('pretty-response')

var app = express()
	.use(pretty)
```

Or you can use specifically on the routes you want.

Then you can use descriptive names as functions to create [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) specific response:

```js
app
.get('/', pretty, function (req, res, next) {
	res.ok().send()
})
```

## License
MIT
