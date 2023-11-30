const User = require("../models/user.model");

exports.existUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });
  if (!user) {
    return res.status(500).json({
      status: "fail",
      message: `cannot find id:${id} on db`,
    });
  }

  next();
};

exports.existUserEmail = async (req, res, next) => {
  const { email } = req.body;
  req.email = email;
  const user = await User.findOne({
    where: {
      email: req.email.toLowerCase(),
      status: "available",
    },
  });
  if (user) {
    return res.status(404).json({
      status: "error",
      message: `User with email: ${email} already exists`,
    });
  }

  next();
};
