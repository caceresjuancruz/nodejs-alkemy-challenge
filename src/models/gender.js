const { DataTypes } = require("sequelize");
const db = require("../db/database");

const gender = db.define('genders', {
    name:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING(250),
        allowNull:false
    }
});

module.exports = gender;

gender.hasMany(require('./movie'), {
  foreignKey: 'genderId',
  sourceKey: 'id'
});