const { Users } = require('../models')
const { server } = require('../')

if (process.env.NODE_ENV != 'development') {
    require('dotenv').config({ path: './config/.env.prod' })
}
else {
    require('dotenv').config({ path: './config/.env.dev' })
}

module.exports.oauthController = async (request, h) => {
    if (request.auth.isAuthenticated) {
        const userInDB = await Users.count({
            where: {
                oauthid: request.auth.credentials.profile.id.toString(),
                authprovider: request.auth.credentials.provider.toString()
            }
        }).then((resp) => {
            return (resp >= 1 ? true : false);
        }).catch((err) => {
            return err
        })

        if (!userInDB) {
            Users.create({
                "oauthid": request.auth.credentials.profile.id,
                "displayname": request.auth.credentials.profile.displayName,
                "authprovider": request.auth.credentials.provider
            })
        }
        const sid = String(Math.random())
        const user = request.auth.credentials.profile.id
        await request.server.app.cache.set(sid, user, 0)
        request.cookieAuth.set({ sid: sid, user: user })
        return h.redirect(process.env.SERVER_HOST_URL + '/oauth/login/success')
    }
    else {
        return h.redirect('/oauth/login/failed')
    }
}