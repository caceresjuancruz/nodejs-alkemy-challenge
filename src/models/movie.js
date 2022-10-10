const { DataTypes } = require("sequelize");
const db = require("../db/database");

const movie = db.define('movies', {
    image:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    title:{
        type:DataTypes.STRING(50),
        unique: true,
        allowNull:false
    },
    creationDate:{
        type:DataTypes.DATEONLY
    },
    calification:{
        type:DataTypes.ENUM({
            values: ['AWFUL', 'BADLY', 'ACCEPTABLE', 'GOOD', 'EXCELLENT']
        }),
        defaultValue: 'ACCEPTABLE'
    },
    type:{
        type:DataTypes.ENUM({
            values: ['MOVIE', 'SERIE']
        }),
        allowNull:false,
        defaultValue: 'MOVIE'
    }
});


module.exports = movie;

movie.belongsToMany(require('./character'), {
    through: "charactersMovies",
    as: "characters",
    foreignKey: "movieId"
});

movie.belongsTo(require('./gender'), {
    foreignKey: 'genderId',
    targetKey: 'id',
    as: 'gender'
});