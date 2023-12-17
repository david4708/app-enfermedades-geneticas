//para  hacer consultas e interacciones y se envian al controlador

//a continuacion para crear un registro en la db, puede usar una funcion o clase
//los metodos estaticos no requieren instanciar la clase
//como el proceso de conexion a la base de datos es atraves de la red,
//es necesario estimar un tiempo de respuesta, por esto se usa el metodo
// async-away

//const RepairModel = require("./repair.model");
import UserModel from '../users/user.model.js';
import RepairModel from './repair.model.js';

class RepairServices {
  static async findAllService() {
    //const user=await UserServices.findOne(data)
    return await RepairModel.findAll({
      where: {
        status: ['pending', 'completed'],
        //   user: user.data,
      },
      include: [
        {
          model: UserModel,
        },
      ],
    });
  }
  static async createService(data) {
    return await RepairModel.create(data);
  }
  static async findOneService(id, status = 'pending') {
    return await RepairModel.findOne({
      where: {
        id,
        status: status,
      },
    });
  }

  static async updateService(repair) {
    return await repair.update({ status: 'completed' });
  }

  static async deleteService(repair) {
    return await repair.update({
      status: 'canceled',
    });
  }
}

export default RepairServices;
