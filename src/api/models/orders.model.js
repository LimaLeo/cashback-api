const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const Order = client.define("orders", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ni_total: {
        type: DataTypes.DOUBLE,
    },
    dt_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
    ni_status_type_id: {
        type: Sequelize.INTEGER,
    },
    ni_user_id: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: false
});

module.exports = Order;