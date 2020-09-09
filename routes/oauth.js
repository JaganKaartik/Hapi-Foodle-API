const { oauthController, authController } = require('../controllers/oauth')

module.exports = [
    {
        method: ['GET'],
        path: '/authSuccess',
        config: {
            auth: 'session',
            handler: authController
        }
    },
    {
        method: ['GET'],
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
                strategy: 'session',
                mode: 'required'
            },
        },
        handler: (request, h) => {
            return (request.auth.isAuthenticated ? { 'message': 'OAuth Success' } : { 'message': 'OAuth Failed' })
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