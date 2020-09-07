const { Dishes, Users } = require('../models')

const displayUser = async (request, h) => {
    const rep = await Users.findAll({
        where: { id: request.params.id.toString() }
    }).then((result) => {
        return result[0]
    }).catch((err) => { return err })
    return rep;
}

const displayAllDish = async (request) => {
    const rep = await Dishes.findAll({
        attributes: ['id', 'name', 'type', 'price']
    }).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
    console.log(request.auth.isAuthenticated)
    return rep
}

const displayDish = async (request, h) => {
    const rep = await Dishes.findAll({
        where: { id: request.params.id.toString() }
    }).then((result) => {
        console.log(result)
        return result[0]
    }).catch((err) => { return err })
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
