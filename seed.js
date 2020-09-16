const Dishes = require('./models/Dishes').Dishes

const seed = () => {
    return Dishes.bulkCreate([{
        name: 'French Toast',
        type: 'Bread',
        price: '$6.00'
    }, {
        name: 'Penne Arabiata',
        type: 'Pasta',
        price: '$10.00'
    }, {
        name: 'Pasta Bologaniase',
        type: 'Pasta',
        price: '$10.00'
    }, {
        name: 'Hot Dog',
        type: 'Snacks',
        price: '$1:50'
    }, {
        name: 'Macaronni',
        type: 'Pasta',
        price: '$7.50'
    },
    {
        name: 'Croissant',
        type: 'bread',
        price: '$0.50'
    }, {
        name: 'Baguette',
        type: 'Bread',
        price: '$2.50'
    }, {
        name: 'Doughnut',
        type: 'Confections',
        price: '$1.50'
    },
    {
        name: 'Pain Au Chocolat',
        type: 'Bread',
        price: '$2.00'
    },
    {
        name: 'Macaroons',
        type: 'Confections',
        price: '$2.50'
    },
    {
        name: 'Baguette',
        type: 'Bread',
        price: '$2.55'
    }
    ]).then(() => {
        console.log('Seed Data Successfully Inserted')
    }).catch((err) => {
        console.log(err)
    })
}

seed().then(() => { process.exit() })