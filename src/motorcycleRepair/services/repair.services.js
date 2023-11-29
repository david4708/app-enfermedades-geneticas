//para  hacer consultas e interacciones y se envian al controlador

//a continuacion para crear un registro en la db, puede usar una funcion o clase
//los metodos estaticos no requieren instanciar la clase
//como el proceso de conexion a la base de datos es atraves de la red,
//es necesario estimar un tiempo de respuesta, por esto se usa el metodo
// async-away

const RepairModel = require("../models/repair.model");

class RepairServices {
  static async findAll() {
    return await RepairModel.findAll({
      where: {
        status: "pending",
      },
    });
  }
  static async create(data) {
    return await RepairModel.create(data);
  }
  static async findOne(id) {
    return await RepairModel.findOne({
      where: { id, status: "pending" },
    });
  }

  static async update(id) {
    return await RepairModel.update({
      where: { id, status: "completed" },
    });
  }

  static async delete(repairs) {
    return await repairs.update({
      status: "canceled",
    });
  }
}
module.exports = RepairServices;
