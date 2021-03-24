const Sequelize = require('sequelize');

const sequelize = new Sequelize('social', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;