const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Usuario = db.define("Usuario", {
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
   
})

module.exports = Usuario;