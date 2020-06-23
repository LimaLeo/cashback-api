const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_MYSQL_DATABASE,
  process.env.DB_MYSQL_USERNAME,
  process.env.DB_MYSQL_PASSWORD,
  {
    host: process.env.DB_MYSQL_HOST,
    dialect: "mysql",
    port: process.env.DB_MYSQL_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const queryInterface = sequelize.getQueryInterface();

const up = () => {
  queryInterface.addConstraint('orders', ['ni_user_id'], {
    type: 'foreign key',
    name: 'FK_Users_Orders',
    references: {
      table: 'users',
      field: 'ni_id',
    },
    onDelete: 'no action',
    onUpdate: 'no action',
  });

  queryInterface.addConstraint('orderItems', ['ni_order_id'], {
    type: 'foreign key',
    name: 'FK_Order_OrderItems',
    references: {
      table: 'orders',
      field: 'ni_id',
    },
    onDelete: 'no action',
    onUpdate: 'no action',
  });

  queryInterface.addConstraint('orderItems', ['ni_item_id'], {
    type: 'foreign key',
    name: 'FK_Item_OrderItems',
    references: {
      table: 'items',
      field: 'ni_id',
    },
    onDelete: 'no action',
    onUpdate: 'no action',
  });

  queryInterface.addConstraint('cashbacks', ['ni_user_id'], {
    type: 'foreign key',
    name: 'FK_User_Cashbacks',
    references: {
      table: 'users',
      field: 'ni_id',
    },
    onDelete: 'no action',
    onUpdate: 'no action',
  });

  queryInterface.addConstraint('cashbacks', ['ni_order_id'], {
    type: 'foreign key',
    name: 'FK_Order_Cashbacks',
    references: {
      table: 'orders',
      field: 'ni_id',
    },
    onDelete: 'no action',
    onUpdate: 'no action',
  });

  return queryInterface;
};

const down = () => {
  queryInterface.dropTable('statusTypes');
  queryInterface.dropTable('users');

  return queryInterface;
}

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ MySQL - Connection has been established successfully.');
    up();
  })
  .catch(err => {
    console.error('MySQL - Unable to connect to the database:', err);
  });




