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
  queryInterface.createTable("users", {
    ni_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tx_firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tx_lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tx_cpf: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tx_email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tx_password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dt_create_at: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  });

  queryInterface.createTable("statusTypes", {
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
  });

  queryInterface.createTable("orders", {
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
  });

  queryInterface.createTable("items", {
    ni_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tx_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ni_price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    dt_create_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  });

  queryInterface.createTable("orderItems", {
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
  });

  queryInterface.createTable("cashbacks", {
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
    },
    ni_order_id: {
      type: Sequelize.INTEGER,
    }
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
    console.log('MySQL - Connection has been established successfully.');
    up();
  })
  .catch(err => {
    console.error('MySQL - Unable to connect to the database:', err);
  });




