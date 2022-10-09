const { DataTypes } = require("sequelize");
const db = require("../db/database");

const character = db.define('characters', {
    image:{
        type:DataTypes.BLOB
    },
    name:{
        type:DataTypes.STRING(50),
        unique: true
    },
    age:{
        type:DataTypes.INTEGER,
    },
    weight:{
        type:DataTypes.INTEGER,
    },
    history:{
        type:DataTypes.STRING(50)
    }
})

module.exports = character;