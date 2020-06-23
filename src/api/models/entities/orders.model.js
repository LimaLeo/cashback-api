const { Sequelize, Model, DataTypes } = require("sequelize");
const entities = require("../entities");

const client = require("../../../connect/mysql");

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
    timestamps: false,
    classMethods: {
        associate: function (models) {
            entities.StatusType.belongsTo(Order);
            entities.Users.belongsTo(Order);
            Order.hasMany(models.OrderItem)
        }
      }
});

Order.belongsTo(entities.StatusType, {foreignKey: 'ni_status_type_id'});
Order.belongsTo(entities.Users, {foreignKey: 'ni_user_id'});
Order.hasMany(entities.OrderItem, {foreignKey: 'ni_user_id'});

module.exports = Order;