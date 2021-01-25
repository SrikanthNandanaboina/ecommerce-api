const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const { Orders } = require("./orders");

const User = sequelize.define(
  "users",
  {
    username: { type: DataTypes.STRING, notNull: true },
    email: { type: DataTypes.STRING, notNull: true },
    full_name: { type: DataTypes.STRING, notNull: true },
    phone_number: { type: DataTypes.STRING, notNull: true },
    password: { type: DataTypes.STRING, notNull: true },
  },
  {
    underscored: true, // to allow underscores in column names
    timestamps: false,
  }
);

User.hasMany(Orders, { foreignKey: "user_id" });
Orders.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User };
