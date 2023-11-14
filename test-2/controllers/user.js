const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Người dùng không tồn tại" });
    }
    const sath = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, sath);
    console.log(hashedPassword);
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    console.log(user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Sai mật khẩu" });
    }

    // Khởi tạo token
    const tokenAccess = jwt.sign(
      { username: user.username, userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ tokenAccess });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
