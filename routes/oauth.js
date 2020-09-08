const { oauthController } = require('../controllers/oauth')

module.exports = [
    {
        method: ['GET', 'POST'],
        path: '/oauth/github',
        config: {
            auth: 'github',
            handler: oauthController
        }
    },
    {
        method: ['GET', 'POST'],
        path: '/oauth/google',
        config: {
            auth: 'google',
            handler: oauthController

        }
    },
    {
        method: 'GET',
        path: '/oauth/login/success',
        config: {
            auth: {
                mode: 'required'
            }
        },
        handler: (request, h) => {
            request.cookieAuth.set({ user: request.auth.credentials.profile })
            return (request.auth.isAuthenticated ? (`<a href="/api/dish/all">Dishes</a>`) /* { 'message': 'OAuth Success' } */ : h.redirect('/error'))
        }
    },
    {
        method: 'GET',
        path: '/oauth/login/failed',
        config: {
            auth: false
        },
        handler: () => {
            return ({ 'message': 'OAuth Failed' });
        }
    },
    {
        method: 'GET',
        path: '/logout',
        config: {
            auth: false,
            handler: (request, h) => {
                request.cookieAuth.clear();
                return ({ 'message': 'success' });
            }
        }
    }
]