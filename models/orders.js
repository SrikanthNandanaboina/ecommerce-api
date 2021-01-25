const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const { OrderItems } = require("./orderItems");

const Orders = sequelize.define(
  "orders",
  {
    user_id: { type: DataTypes.INTEGER, notNull: true },
    order_description: { type: DataTypes.STRING, notNull: true },
    order_date: { type: DataTypes.DATE, defaultValue: new Date() },
  },
  {
    underscored: true, // to allow underscores in column names
    timestamps: false,
  }
);

Orders.hasMany(OrderItems, { foreignKey: "order_id" });
OrderItems.belongsTo(Orders, { foreignKey: "order_id" });

module.exports = { Orders };
