//para  hacer consultar e interacciones y se envian al controlador

const GeneticDiseases = require("./model");

//a continuacion para crear un registro en la db, puede usar una funcion o clase
//los metodos estaticos no requieren instanciar la clase
//como el proceso de conexion a la base de datos es atraves de la red,
//es necesario estimar un tiempo de respuesta, por esto se usa el metodo
// async-away

class GenericDiseasesServices {
  static async findAll() {
    return await GeneticDiseases.findAll({
      where: {
        treatment: "segun prescripcion medica",
        status: "active",
      },
    });
  }

  static async create(data) {
    return await GeneticDiseases.create(data);
  }
  static async findOne(id) {
    return await GeneticDiseases.findOne({
      where: { id, status: "active" },
    });
  }

  static async update(geneticDiseases, data) {
    return await geneticDiseases.update(data);
  }

  static async delete(geneticDiseases) {
    return await geneticDiseases.update({
      status: "inactive",
    });
  }
}
module.exports = GenericDiseasesServices;
