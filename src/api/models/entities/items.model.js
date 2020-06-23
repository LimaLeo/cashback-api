const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../../connect/mysql");

const Item = client.define("items", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tx_name: {
        allowNull: false,
        type: DataTypes.STRING,
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
}, {
    timestamps: false
});

module.exports = Item;