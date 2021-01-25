const { User } = require("../models/users");
const { Orders } = require("../models/orders");
const { OrderItems } = require("../models/orderItems");

const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (err) {
    throw err;
  }
};

const getUserDataById = async (id) => {
  try {
    const user = await User.findOne({
      where: { id },
      attributes: ["id", "email", "full_name", "phone_number", "username"],
      include: [{ model: Orders, include: [{ model: OrderItems }] }],
    });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { createUser, getUserDataById };
