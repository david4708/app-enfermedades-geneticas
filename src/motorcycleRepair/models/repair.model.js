const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database/database");

const Repair = sequelize.define("repairs", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "canceled"),
    allowNull: false,
    defaultValue: "pending",
  },
});
module.exports = Repair;
