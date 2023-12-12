//const { DataTypes } = require("sequelize");
//const { sequelize } = require("../../config/database/database");
import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

const Repair = sequelize.define('repairs', {
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
  motorNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_Id',
  },

  status: {
    type: DataTypes.ENUM('pending', 'completed', 'canceled'),
    allowNull: false,
    defaultValue: 'pending',
  },
});

export default Repair;
