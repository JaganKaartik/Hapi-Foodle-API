const { Dishes } = require('../models')

const displayAllDish = async (request, h) => {
  const rep = await Dishes.findAll({
    attributes: ['id', 'name', 'type', 'price'],
  })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err
    })
  return rep
}

const displayDish = async (request, h) => {
  const rep = await Dishes.findAll({
    where: { id: request.params.id.toString() },
  })
    .then((result) => {
      console.log(result)
      return result[0]
    })
    .catch((err) => {
      return err
    })
  return rep
}

const addDish = async (request, h) => {
  const rep = await Dishes.create({
    name: request.payload.name,
    type: request.payload.type,
    price: request.payload.price,
  })
    .then(() => {
      return ({ "message": "Successfully inserted Dish" })
    })
    .catch((err) => {
      return err
    })
  return rep
}

const updateDish = async (request, h) => {
  const rep = await Dishes.update(
    { price: request.payload.price },
    {
      where: { name: request.payload.name },
    }
  )
    .then(() => {
      return ({ "message": "Successfully Updated Dish" })
    })
    .catch((err) => {
      return err
    })
  return rep
}

const deleteDish = async (request, h) => {
  const rep = await Dishes.destroy({
    where: { id: request.params.id.toString() },
    force: true,
  })
    .then(() => {
      return ({ "message": "Warning! SuccessFully Deleted Record" })
    })
    .catch((err) => {
      return err
    })
  return rep
}

const deleteAll = async (request, h) => {
  const rep = await Dishes.destroy({
    where: {},
    force: true,
  })
    .then(() => {
      return ({ "message": "Warning! SuccessFully Deleted All Records" })
    })
    .catch((err) => {
      return err.code(500)
    })
  return rep
}

module.exports.displayAllDish = displayAllDish
module.exports.displayDish = displayDish
module.exports.addDish = addDish
module.exports.updateDish = updateDish
module.exports.deleteDish = deleteDish
module.exports.deleteAll = deleteAll
