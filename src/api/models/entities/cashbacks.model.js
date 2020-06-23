'use strict'

module.exports = (sequelize, DataTypes, Sequelize) => {
    const Cashbacks = sequelize.define("cashbacks", {
        ni_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        bl_status: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ni_order_value: {
            allowNull: false,
            type: DataTypes.DOUBLE,
        },
        ni_value: {
            allowNull: false,
            type: DataTypes.DOUBLE,
        },
        ni_percentage: {
            allowNull: false,
            type: DataTypes.DOUBLE,
        },
        dt_create_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: new Date(),
        },
        ni_user_id: {
            type: Sequelize.INTEGER,
        },
        ni_order_id: {
            type: Sequelize.INTEGER,
        }
    }, {
        timestamps: false
    });
  
    return Cashbacks;
};