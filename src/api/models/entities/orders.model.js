'use strict'

module.exports = (sequelize, DataTypes, Sequelize) => {
    const Orders = sequelize.define("orders", {
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
        timestamps: false,
    });

    return Orders;
}