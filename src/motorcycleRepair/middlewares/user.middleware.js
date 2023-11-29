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
    //return next(`User with email: ${id} not found`, 404);
    return next(`User with id not found`, 404);
  }
  (req.user = user), next();
};

exports.existUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email: email.toLowerCase(),
      status: "available",
    },
  });
  if (!user) {
    return next(`User with email: ${email} not found`, 404);
  }
  req.user = user;
  next();
};
