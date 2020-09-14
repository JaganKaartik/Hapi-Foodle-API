const Bell = require('@hapi/bell')
const Cookie = require('@hapi/cookie')
const Cors = require('hapi-cors')
const Https = require('hapi-require-https')
module.exports = [Bell, Cors, Cookie, Https]
