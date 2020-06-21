const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const Item = client.define("item", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bl_name: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    ni_price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
    },
    dt_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
});

module.exports = Item;