const Repair = require("../models/repair.model");

exports.existRepair = async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repair) {
    return next(`Repair with id: ${id} not found`);
  }

  req.repair = repair;
  next();
};
