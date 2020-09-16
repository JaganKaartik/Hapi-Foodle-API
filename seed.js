const sequelize = require('./models/connector')

const SeedA = sequelize.query('ALTER TABLE "Dishes" ADD COLUMN id SERIAL PRIMARY KEY')
const SeedB = sequelize.query(`insert into "Dishes" values
    ('Croissant', 'Bread', '$0.50'),
    ('Baguette', 'Bread', '$2.50'),
    ('Doughnut', 'Confections', '$1.50'),
    ('Pain Au Chocolat', 'Bread', '$2.00'),
    ('Penne Pasta', 'Pasta', '$6.80'),
    ('French Toast', 'Bread', '$5.00'),
    ('Penne Arabiata', 'Pasta', '$7.00'),
    ('Pasta Bologaniase', 'Pasta', '$10.00'),
    ('Pizza', 'Bread', '$12.00'),
    ('Crepe', 'Pancake', '$2.50'),
    ('Macaroons', 'Confections', '$2.50'),
    ('Macaronni', 'Pasta', '$7.50'),
    ('Hot Dog', 'Snacks', '$1.50'),
    ('Baguette', 'Bread', '$3.55')`);

module.exports.SeedFn = async () => {
    await SeedA
    await SeedB
}
