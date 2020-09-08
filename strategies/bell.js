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

// module.exports.CookieStrategy = {
//   cookie: {
//     name: 'foodle',
//     password: process.env.COOKIE_PASSWORD,
//     ttl: 60 * 60 * 24 * 1000,
//     isSecure: false,
//     isSameSite: 'Lax',
//   },
//   keepAlive: false,
//   redirectTo: "/error"
// }

module.exports.CookieStrategy = {
  cookie: {
    name: "foodle",
    password: process.env.COOKIE_PASSWORD,
    isSecure: false,
    isSameSite: "Lax",
    ttl: 60 * 60 * 24 * 1000
  },
  redirectTo: "/error",
  validateFunc: async (request, session) => {
    const cached = await cache.get(session.sid);
    const out = {
      valid: !!cached
    };
    if (out.valid) {
      out.credentials = cached.account;
    }
    return out;
  }
}