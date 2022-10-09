const { DataTypes } = require("sequelize");
const db = require("../db/database");

const user = db.define('users', {
    username:{
        type:DataTypes.STRING(50)
    },
    password:{
        type:DataTypes.STRING(100)
    },
    name:{
        type:DataTypes.STRING(50)
    },
    email:{
        type:DataTypes.STRING(50),
        unique: true,
    },
    enable:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true
    }
})

module.exports = user;