const { Orders } = require("../models/orders");
const { OrderItems } = require("../models/orderItems");

const getOrderDataById = async (id) => {
  try {
    const Order = await Orders.findOne({
      where: { id },
      include: [{ model: OrderItems }],
    });
    return Order;
  } catch (err) {
    throw err;
  }
};

module.exports = { getOrderDataById };
