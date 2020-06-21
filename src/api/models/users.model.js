const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const User = client.define("users", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tx_firstName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    tx_lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    tx_cpf: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    tx_email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    dt_create_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
});

module.exports = User;
