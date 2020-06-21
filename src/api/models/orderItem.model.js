const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const OrderItem = client.define("orderItem ", {
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
        references: 'order',
        referencesKey: 'ni_id'
    },
    ni_item_id: {
        type: Sequelize.INTEGER,
        references: 'item',
        referencesKey: 'ni_id'
    },
});

module.exports = OrderItem;