const User = require("../models/user.model");

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: "available",
      },
    });
    return res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });

    return res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};
exports.findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }
    return res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email } = req.body;
    const user = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }
    await user.update({ name, email });
    return res.status(200).json({
      status: "success",
      message: `only update name and email `,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }

    await user.update({ status: "disabled" });
    return res.status(200).json({
      status: "success",
      message: `user id: ${id} deleted`,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};
