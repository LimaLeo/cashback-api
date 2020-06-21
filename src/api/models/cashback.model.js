const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../connect/mysql");

const Cashback = client.define("cashback", {
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
    ni_value: {
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
        references: 'user', 
        referencesKey: 'ni_id'
    },
    ni_order_id: {
        type: Sequelize.INTEGER,
        references: 'order', 
        referencesKey: 'ni_id'
    }
  });
  
module.exports = Cashback;