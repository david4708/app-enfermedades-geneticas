const UserModel = require("../models/user.model");

class UserServices {
  static async findAll() {
    return await UserModel.findAll();
  }

  static async create(data) {
    return await UserModel.create(data);
  }
  static async findOne(id) {
    return await UserModel.findOne({
      where: { id },
    });
  }

  static async update(data) {
    return await UserModel.update(data);
  }

  static async delete(users) {
    return await users.update({
      status: "disabled",
    });
  }
}
module.exports = UserServices;
