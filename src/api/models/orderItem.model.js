const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const OrderItem = client.define("orderItems", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ni_quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    dt_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
    ni_order_id: {
        type: Sequelize.INTEGER,
    },
    ni_item_id: {
        type: Sequelize.INTEGER,
    },
});

module.exports = OrderItem;