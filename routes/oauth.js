const { authController } = require('../controllers/oauth')

module.exports = [
  {
    method: 'GET',
    path: '/auth/github',
    options: {
      auth: 'github',
      handler: authController,
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/auth/google',
    options: {
      auth: 'google',
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
        console.log(`Currently session of id : ${request.auth.credentials}`)
        request.cookieAuth.clear()
        console.log(`After Cookie Cleared: Currently session of id : ${request.auth.credentials}`)
        return { message: 'success' }
      },
    },
  }
]
