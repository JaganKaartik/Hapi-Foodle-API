const { authController } = require('../controllers/auth')

module.exports = [
  {
    method: 'GET',
    path: '/',
    options: {
      auth: false,
      handler: (req, res) => {
        return ('<h1>Welcome to docker app</h1>')
      }
    },
  },
  {
    method: 'GET',
    path: '/auth/twitter',
    options: {
      auth: {
        mode: 'try',
        strategy: 'twitter',
      },
      handler: authController,
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/auth/google',
    options: {
      auth: {
        mode: 'try',
        strategy: 'google',
      },
      handler: authController,
    },
  },
  {
    method: 'GET',
    path: '/auth/login/success',
    options: {
      auth: {
        mode: 'required',
      },
      handler: (request, h) => {
        console.log(request.auth.credentials)
        return request.auth.isAuthenticated
          ? { message: 'OAuth Success' }
          : { message: 'OAuth Failed' }
      },
    },
  },
  {
    method: 'GET',
    path: '/auth/login/failed',
    options: {
      auth: { mode: 'try' },
      handler: () => {
        return { message: 'OAuth Failed' }
      },
    },
  },
  {
    method: 'GET',
    path: '/logout',
    options: {
      auth: { mode: 'try' },
      handler: (request, h) => {
        request.cookieAuth.clear()
        return { message: 'success' }
      },
    },
  },
]
