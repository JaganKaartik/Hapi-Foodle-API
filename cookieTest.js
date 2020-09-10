'use strict'

const Hapi = require('@hapi/hapi')
const cookie = require("@hapi/cookie")

const init = async () => {
    const server = Hapi.server({
        host: "localhost",
        port: 8888
    })

    await server.register(cookie);

    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'test-cookie',
            password: 'super-secure-cookie-pass-at-least-32chars',
            isSecure: false,
            ttl: 60 * 60 * 1000,
            isSameSite: 'Lax'
        },
        redirectTo: false,
        keepAlive: true
    });
    server.auth.default('session')

    server.route([
        {
            method: 'GET',
            path: '/test/login',
            options: {
                auth: { mode: 'try' },
                handler: (req, res) => {
                    const id = Math.random()
                    req.cookieAuth.set({ uid: id })
                    console.log(`coookie is set for id : ${id}`)
                    return ('<h1>Login success!</h1>')
                }
            }
        },
        {
            method: 'GET',
            path: '/test/res',
            options: {
                auth: { mode: 'required' },
                handler: (req, res) => {
                    console.log(`authenticated route`)
                    return ('<h1>In Auth Route</h1>')
                }
            },
        },
        {
            method: 'GET',
            path: '/test/logout',
            options: {
                auth: { mode: 'try' },
                handler: (req, res) => {
                    req.cookieAuth.clear()
                    console.log(`log out.. cookie removed`)
                    return ('<h1>log out.. cookie removed</h1>')
                }
            },
        },
        {
            method: 'GET',
            path: '/test/api',
            options: {
                auth: {
                    mode: 'required'
                },
            },
            handler: (request, h) => {
                return (request.auth.isAuthenticated ? { 'message': 'Cookie Test Success' } : { 'message': 'Cookie Test Failed' })
            }
        },
    ])


    await server.start()
    console.log(`Server running at 8888`)
    module.exports.server = server;
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();