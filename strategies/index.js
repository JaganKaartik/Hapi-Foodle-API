require('dotenv').config({ path: './config/.env' });

module.exports.GithubStrategy = {
  provider: "github",
  password: process.env.RANDOM_PASSWORD_STRING,
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  isSecure: false
}

module.exports.GoogleStrategy = {
  provider: "google",
  password: process.env.RANDOM_PASSWORD_STRING,
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  isSecure: false
}

module.exports.CookieStrategy = {
  cookie: {
    name: 'foodle',
    password: process.env.COOKIE_PASSWORD,
    isSecure: false,
    isSameSite: 'Lax'
  },
  redirectTo: "/error"
}