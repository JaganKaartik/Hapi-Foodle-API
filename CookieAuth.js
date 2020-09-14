'use strict'

const Hapi = require('@hapi/hapi')
const cookie = require("@hapi/cookie")
const Bell = require('@hapi/bell')

const init = async () => {
    const server = Hapi.server({
        host: "localhost",
        port: 8888
    })

    await server.register([cookie, Bell]);

    if (process.env.NODE_ENV === 'production') {
        require('dotenv').config({ path: './config/.env.prod' })
    } else {
        require('dotenv').config({ path: './config/.env.dev' })
    }

    const GithubStrategy = {
        provider: 'github',
        password: process.env.RANDOM_PASSWORD_STRING,
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        isSecure: false,
        isSameSite: 'Lax'
    }

    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'test-cookie',
            password: 'super-secure-cookie-pass-at-least-32chars',
            isSecure: false, //In Prod should be True.
            ttl: 60 * 60 * 1000,
            isSameSite: 'Lax'
        },
        redirectTo: false,
        keepAlive: true
    });
    server.auth.strategy('github', 'bell', GithubStrategy)
    server.auth.default('session')

    server.route([
        {
            method: 'GET',
            path: '/test/login',
            options: {
                auth: 'github',
                handler: (request, h) => {
                    const id = Math.random()
                    request.cookieAuth.set({ uid: id }) // Cookie is set
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
                handler: () => {
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
                handler: (request, h) => {
                    request.cookieAuth.clear() // Clearing Cookie 
                    console.log(`log out.. cookie removed`)
                    return ('<h1>log out.. cookie removed</h1>')
                }
            },
        },
        {
            method: 'GET',
            path: '/test/api',
            options: {
                auth: { mode: 'required' },
                handler: (request, h) => {
                    return (request.auth.isAuthenticated ? { 'message': 'Cookie Test Success' } : { 'message': 'Cookie Test Failed' })
                }
            },
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