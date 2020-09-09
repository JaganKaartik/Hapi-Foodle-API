const Bell = require('@hapi/bell')
const Cookie = require("@hapi/cookie");
const cors = require('hapi-cors')
const plugins = [Bell, cors, Cookie]

module.exports = plugins
