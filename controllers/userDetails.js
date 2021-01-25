const { getUserDataById } = require("../services/users");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.userDetailsHandler = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      response.status(401).json();
    } else {
      const { id } = jwt.verify(token, secretKey);
      const userData = await getUserDataById(id);
      res.send(userData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: "something went wrong" });
  }
};
