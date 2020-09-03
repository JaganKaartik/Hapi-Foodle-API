const { Dishes, Users } = require('../models')

const displayUser = async (request, h) => {
    const rep = await Users.findAll({
        where: { id: request.params.id.toString() }
    }).then((result) => {
        return result[0]
    }).catch((err) => { return err })
    return rep;
}

// const login = async (request, h) => {
//     if (request.method === 'post') {
//         user = request.payload.username
//         pass = request.payload.password

//         console.log(user);
//         console.log(pass)
//         const rep = await Users.findAll({ where: { Name: user, Password: pass } })
//             .then((result) => {
//                 console.log('here')
//                 request.cookieAuth.set({ id: result[0].ID, name: result[0].Name })
//                 console.log('Successfully Authenticated')
//                 return { "message": "success" }
//             })
//             .catch((err) => { return { "message": "error" } })
//         return rep;
//     } else {
//         return h.redirect('/')
//     }
// }

const displayAllDish = async (request, h) => {
    const rep = await Dishes.findAll().then((result) => {
        return result
    }).catch((err) => {
        return err
    })
    return rep
}

const displayDish = async (request, h) => {
    const rep = await Dishes.findAll({
        where: { id: request.params.id.toString() }
    }).then((result) => {
        return result[0]
    }).catch((err) => console.log(err))
    return rep;

}

const addDish = (request, h) => {
    Dishes.create({
        "name": request.payload.name,
        "type": request.payload.type,
        "price": request.payload.price
    }).then(() => { return reply(`Successfully inserted Dish`) })
        .catch((err) => { return err })
}

const updateDish = (request, h) => {
    Dishes.update({ price: request.payload.price }, {
        where: { name: request.payload.name },
    }).then(() => { return reply(`SuccessFully Updated Record`).code(200) }).catch((err) => { return err.code(500) })
}

const deleteDish = (request, h) => {
    Dishes.destroy({
        where: { id: request.params.id.toString() }, force: true
    }).then(() => { return reply(`SuccessFully Deleted Record`).code(200) }).catch((err) => { return err.code(500) })
}

const deleteAll = (request, h) => {
    Dishes.destroy({
        where: {}, force: true
    }).then(() => { return reply(`SuccessFully Deleted All Records`).code(200) }).catch((err) => { return err.code(500) })
}

// module.exports.loginHandler = login
module.exports.displayUser = displayUser
module.exports.displayAllDish = displayAllDish
module.exports.displayDish = displayDish
module.exports.addDish = addDish
module.exports.updateDish = updateDish
module.exports.deleteDish = deleteDish
module.exports.deleteAll = deleteAll
