const { DataTypes } = require("sequelize");
const db = require("../db/database");

const character = db.define('characters', {
    image:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
    },
    weight:{
        type:DataTypes.INTEGER,
    },
    history:{
        type:DataTypes.STRING(250)
    }
})

module.exports = character;

character.belongsToMany(require('./movie'), {
    through: "charactersMovies",
    as: "movies",
    foreignKey: "characterId"
});
