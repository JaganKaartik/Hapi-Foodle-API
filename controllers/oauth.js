const { Users } = require('../models')

if (process.env.NODE_ENV != 'development') {
  require('dotenv').config({ path: './config/.env.prod' })
} else {
  require('dotenv').config({ path: './config/.env.dev' })
}

module.exports.oauthController = async (request, h) => {
  if (request.auth.isAuthenticated) {
    const userInDB = await Users.count({
      where: {
        oauthid: request.auth.credentials.profile.id.toString(),
        authprovider: request.auth.credentials.provider.toString(),
      },
    })
      .then((resp) => {
        return resp >= 1 ? true : false
      })
      .catch((err) => {
        return err
      })

    if (!userInDB) {
      Users.create({
        oauthid: request.auth.credentials.profile.id,
        displayname: request.auth.credentials.profile.displayName,
        authprovider: request.auth.credentials.provider,
      })
    }

    request.cookieAuth.set({ id: request.auth.credentials.profile.id })
    console.log('at /auth/github controllers')
    return h.redirect('/auth/login/success')
  } else {
    return h.redirect('/auth/login/failed')
  }
}

module.exports.authController = async (request, h) => {
  if (request.auth.isAuthenticated) {
    console.log('VALID AUTHENTICATION')
    return `<h1><a href='/api/dish/all'>DISHES</a></h1>`
  } else {
    return `<h1><a href='/api/dish/all'>NOT AUTH</a></h1>`
  }
}
