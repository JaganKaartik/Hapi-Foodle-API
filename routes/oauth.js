const { oauthController, authController } = require('../controllers/oauth')

module.exports = [
  {
    method: 'GET',
    path: '/success',
    options: {
      auth: { mode: 'try' },
      handler: (req, h) => {
        console.log(req.auth.credentials)
      },
    },
  },
  {
    method: ['GET'],
    path: '/oauth/github',
    options: {
      auth: 'github',
      handler: oauthController,
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/oauth/google',
    options: {
      auth: 'google',
      handler: oauthController,
    },
  },
  {
    method: 'GET',
    path: '/oauth/login/success',
    options: {
      auth: {
        mode: 'required',
      },
    },
    handler: (request, h) => {
      console.log(request.auth.credentials)
      return request.auth.isAuthenticated
        ? h.redirect('/success')
        : { message: 'OAuth Failed' }
    },
  },
  {
    method: 'GET',
    path: '/oauth/login/failed',
    options: {
      auth: false,
    },
    handler: () => {
      return { message: 'OAuth Failed' }
    },
  },
  {
    method: 'GET',
    path: '/logout',
    options: {
      auth: false,
      handler: (request, h) => {
        request.cookieAuth.clear()
        return { message: 'success' }
      },
    },
  },
]
