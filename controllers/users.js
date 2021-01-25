const bcrypt = require("bcrypt");
const { createUser } = require("../services/users");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.userHandler = async (req, res) => {
  const { password, email } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await createUser({ ...req.body, password: hash });
    const token = jwt.sign({ email, id: user.id }, secretKey);
    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: "something went wrong" });
  }
};
