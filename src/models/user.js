const { DataTypes } = require("sequelize");
const db = require("../db/database");

const user = db.define('users', {
    username:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false
    },
    enable:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true
    },
    role:{
        type:DataTypes.ENUM({
            values: ['USER_ROLE', 'ADMIN_ROLE']
        }),
        allowNull:false,
        defaultValue: 'USER_ROLE'
    }
})

module.exports = user;