const { DataTypes } = require("sequelize");
const db = require("../db/database");

const movie = db.define('movies', {
    // image:{
    //     type:DataTypes.BLOB
    // },
    // title:{
    //     type:DataTypes.STRING(50),
    //     unique: true
    // },
    // creationDate:{
    //     type:DataTypes.DATE
    // },
    // calification:{
    //     type:DataTypes.ENUM
    // },
    // gender:{
    //     type:DataTypes.STRING(50),
    // },
    // type:{
    //     type:DataTypes.ENUM
    // }
})

module.exports = movie;