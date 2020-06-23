const { Sequelize, Model, DataTypes } = require("sequelize");
const client = require("../../../connect/mysql");
const entities = require("../entities");

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
}, {
    timestamps: false,
    classMethods: {
        associate: function (models) {
            entities.StatusType.belongsTo(OrderItem);
            entities.Users.belongsTo(OrderItem);
        }
      }
});

OrderItem.belongsTo(entities.StatusType, {foreignKey: 'ni_status_type_id'});
OrderItem.belongsTo(entities.Users, {foreignKey: 'ni_user_id'});


module.exports = OrderItem;