const User = require("../model/userSchema");

exports.getUsers = async (req, res) => {
  try {
    // const userId = req.params.userId;
    const user = await User.find({});
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
