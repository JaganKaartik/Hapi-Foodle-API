const Hapi = require('@hapi/hapi')
const authConfig = require("./config/AuthConfig")
const plugs = require("./config/Plugins")
const routes = require("./routes")

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
    routes: {
      cors: {
        origin: ['*'],
        headers: [
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Origin",
          "Accept",
          "Authorization",
          "Content-Type",
          "If-None-Match",
          "Accept-language"
        ],
        additionalHeaders: [
          "Access-Control-Allow-Headers: Origin, Content-Type, x-ms-request-id , Authorization"
        ],
      }
    }
  })

  await server.register(plugs);

  server.auth.strategy('github', 'bell', authConfig.GithubStrategy);
  // server.auth.strategy('google', 'bell', authConfig.GoogleStrategy);
  server.auth.strategy('session', 'cookie', authConfig.CookieStrategy);

  server.route(routes)

  await server.start()
  console.log(`Server running`)

  module.exports.server = server;

}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();