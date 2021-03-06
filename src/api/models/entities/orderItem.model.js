'use strict'

module.exports = (sequelize, DataTypes, Sequelize) => {
    const OrderItems = sequelize.define("orderItems", {
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
    }, {
        timestamps: false,
    });

    return OrderItems;
}