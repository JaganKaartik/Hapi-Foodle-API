'use strict'

const Hapi = require('@hapi/hapi')
const strategy = require('./strategies/')
const plugs = require('./strategies/plugin')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 8888,
  })

  await server.register(plugs)

  server.auth.strategy('github', 'bell', strategy.GithubStrategy)
  server.auth.strategy('google', 'bell', strategy.GoogleStrategy)
  server.auth.strategy('session', 'cookie', strategy.CookieStrategy)
  server.auth.default('session')

  server.route(routes)

  await server.start()
  console.log(`Server running`)

  module.exports.server = server
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
