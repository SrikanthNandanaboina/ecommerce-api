const { getOrderDataById } = require("../services/orderInfo");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.orderDetailsHandler = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      response.status(401).json();
    } else {
      const decoded = jwt.verify(token, secretKey);
      if (decoded) {
        const { id } = req.params;
        const orderData = await getOrderDataById(id);
        res.status(200).send(orderData);
      } else {
        res.status(401).json();
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: "something went wrong" });
  }
};
