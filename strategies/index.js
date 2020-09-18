// if (process.env.NODE_ENV === 'production') {
//   require('dotenv').config({ path: './config/.env.prod' })
// } else {
//   require('dotenv').config({ path: './config/.env.dev' })
// }

// nodrequire('dotenv').config()

module.exports.GoogleStrategy = {
  provider: 'google',
  password: process.env.RANDOM_PASSWORD_STRING,
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  isSecure: false,
  isHttpOnly: true,
}

module.exports.TwitterStrategy = {
  provider: 'twitter',
  password: process.env.RANDOM_PASSWORD_STRING,
  clientId: process.env.TWITTER_API_KEY,
  clientSecret: process.env.TWITTER_CLIENT_SECRET,
  isSecure: false,
  isHttpOnly: true,
}

module.exports.CookieStrategy = {
  cookie: {
    name: 'foodle',
    password: process.env.COOKIE_PASSWORD,
    isSecure: false,
    path: '/',
    isSameSite: false,
  },
  redirectTo: false,
}
