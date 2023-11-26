//definicion funciones
//controller

const GenericDiseasesServices = require("./services");

exports.findAll = async (req, res) => {
  //const { requesTime } = req;
  try {
    const geneticDiseases = await GenericDiseasesServices.findAll();
    return res.status(200).json({
      geneticDiseases,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong",
      error,
    });
  }
};

exports.create = async (req, res) => {
  //const disease = req.body;

  const { name, description, mortality_rate, treatment, symptoms } = req.body;

  const geneticDiseases = await GenericDiseasesServices.create({
    name,
    description,
    mortality_rate,
    treatment,
    symptoms,
  });

  return res.status(201).json({
    data: geneticDiseases,
  });
};

exports.findOne = async (req, res) => {
  console.log(req.params);
  //const { requesTime } = req;

  const { id } = req.params;
  const geneticDiseases = await GenericDiseasesServices.findOne(id);
  if (!geneticDiseases) {
    return res.status(404).json({
      status: "error",
      message: `Genetic Diseased winth: ${id} not found`,
    });
  }
  return res.status(200).json({
    id: req.params.id,
    geneticDiseases,
  });
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const geneticDiseases = await GenericDiseasesServices.findOne(id);

    if (!geneticDiseases) {
      return res.status(404).json({
        status: "error",
        message: `Genetic Diseased winth: ${id} not found`,
      });
    }

    const geneticDiseasesUpdate = await GenericDiseasesServices.update(
      geneticDiseases,
      {
        name,
        description,
      }
    );
    return res.status(200).json({
      geneticDiseasesUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "something went very wrong",
      error,
    });
  }
};

exports.DELETE = async (req, res) => {
  const { id } = req.params;
  const geneticDiseases = await GenericDiseasesServices.findOne(id);

  if (!geneticDiseases) {
    return res.status(404).json({
      status: "error",
      message: `Genetic Diseased winth: ${id} not found`,
    });
  }
  await GenericDiseasesServices.delete(geneticDiseases);
  return res.status(204).json(null);
};
