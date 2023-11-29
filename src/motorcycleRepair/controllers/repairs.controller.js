//definicion funciones
//controller

const Repair = require("../models/repair.model");
const User = require("../models/user.model");

exports.findAllRepair = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: "pending",
      },
    });

    return res.status(200).json({
      status: "success",
      repairs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};

exports.create = async (req, res) => {
  try {
    const { date, userId, description } = req.body;
    const repair = await Repair.create({
      date,
      userId,
      description,
    });
    return res.status(200).json({
      status: "success",
      repair,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};

exports.findRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repairs = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });
    if (!repairs) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }

    return res.status(200).json({
      status: "success",
      repairs,
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
    const repairs = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });
    if (!repairs) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }
    await repairs.update({ status: "completed" });
    return res.status(200).json({
      status: "success",
      message: `update id: ${id} `,
      repairs,
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
    const repair = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: "error",
        message: `user with id: ${id} not found`,
      });
    }

    await repair.update({ status: "canceled" });
    return res.status(200).json({
      status: "success",
      message: `repair id: ${id} canceled`,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server internal error",
    });
  }
};
