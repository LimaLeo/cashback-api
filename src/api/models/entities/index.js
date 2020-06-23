const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../../connect/mysql");

const entities = {};

entities.Sequelize = Sequelize;
entities.sequelize = sequelize;

entities.Cashbacks = require('./cashbacks.model.js')(sequelize, DataTypes, Sequelize);
entities.Items = require('./items.model.js')(sequelize, DataTypes, Sequelize);
entities.OrderItems = require('./orderItem.model.js')(sequelize, DataTypes, Sequelize);
entities.Orders = require('./orders.model.js')(sequelize, DataTypes, Sequelize);
entities.StatusTypes = require('./statusTypes.model.js')(sequelize, DataTypes, Sequelize);
entities.Users = require('./users.model.js')(sequelize, DataTypes, Sequelize);

entities.Orders.belongsTo(entities.Users, {
    foreignKey: {
        name: 'ni_user_id'
    }
});
entities.Users.hasMany(entities.Orders, {
    foreignKey: {
        name: 'ni_user_id'
    }
});

entities.Cashbacks.belongsTo(entities.Users, {
    foreignKey: {
        name: 'ni_user_id'
    }
});
entities.Users.hasMany(entities.Cashbacks, {
    foreignKey: {
        name: 'ni_user_id'
    }
});

entities.Orders.belongsTo(entities.StatusTypes, {
    foreignKey: {
        name: 'ni_status_type_id'
    }
});
entities.StatusTypes.hasMany(entities.Orders , {
    foreignKey: {
        name: 'ni_user_id'
    }
});

entities.OrderItems.belongsTo(entities.Orders, {
    foreignKey: {
        name: 'ni_order_id'
    }
});
entities.Orders.hasMany(entities.OrderItems,  {
    foreignKey: {
        name: 'ni_order_id'
    }
});

entities.OrderItems.belongsTo(entities.Items, {
    foreignKey: {
        name: 'ni_item_id'
    }
});
entities.Items.hasMany(entities.OrderItems, {
    foreignKey: {
        name: 'ni_item_id'
    }
});

entities.OrderItems.belongsTo(entities.Cashbacks, {
    foreignKey: {
        name: 'ni_order_id'
    }
});
entities.Cashbacks.hasOne(entities.OrderItems, {
    foreignKey: {
        name: 'ni_order_id'
    }
});

module.exports = entities;