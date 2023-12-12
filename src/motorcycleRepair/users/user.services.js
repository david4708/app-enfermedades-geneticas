import UserModel from './user.model.js';

class UserServices {
  static async findOne(id) {
    return await UserModel.findOne({
      where: {
        id,
        status: 'available',
      },
    });
  }

  static async findAll() {
    return await UserModel.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async update(user, data) {
    return await user.update(data);
  }

  static async delete(user) {
    return await user.update({
      status: 'disabled',
    });
  }

  static async createRegister(data) {
    return await UserModel.create(data);
  }

  static async findOneByEmail(email) {
    return await UserModel.findOne({
      where: {
        status: 'available',
        email: email,
      },
    });
  }
}

export default UserServices;
