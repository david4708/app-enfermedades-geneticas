const Repair = require("../models/repair.model");

exports.existRepair = async (req, res, next) => {
  const { status } = req.body;
  req.status = status;
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
    },
  });
  if (id) {
    return res.status(500).json({
      status: "fail",
      message: `repair with id:${id} does not exist`,
    });
  }

  const repair2 = await Repair.findOne({
    where: {
      id,
      status: "completed",
    },
  });

  if (repair2) {
    return res.status(500).json({
      status: "fail",
      message: `cannot change status of id:${id}, on db your status it's completed`,
    });
  }
  const repair3 = await Repair.findOne({
    where: {
      id,
      status: "canceled",
    },
  });

  if (repair3) {
    return res.status(500).json({
      status: "fail",
      message: `repair id:${id}, is already canceled on db`,
    });
  }
  //req.repair = repair;
  next();
};
