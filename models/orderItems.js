const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const OrderItems = sequelize.define(
  "order_items",
  {
    order_id: { type: DataTypes.INTEGER, notNull: true },
    item_id: { type: DataTypes.INTEGER, notNull: true },
    item_description: { type: DataTypes.STRING, notNull: true },
  },
  {
    underscored: true, // to allow underscores in column names
    timestamps: false,
  }
);

module.exports = { OrderItems };
