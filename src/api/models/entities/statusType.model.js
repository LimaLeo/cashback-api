const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../../connect/mysql");

const StatusType = client.define("statusType", {
    ni_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tx_type: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    tx_description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    dt_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },
}, {
    timestamps: false
});

module.exports = StatusType;