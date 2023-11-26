//TODO:saludo1 se debe ejecutar solo para la ruta del findAll y en ese controlador
//se debera traer el saludo y enviarlo por la respuesta
exports.Saludo1 = (req, res, next) => {
  const Saludo1 = "hola soy saludo 1";
  req.Saludo1 = Saludo1;
  next();
};

//TODO:Saludo2 se debe ejecutar solo para la ruta patch y delete y ese controlador se
//debera traer el saludo y enviarlo por la respuesta
exports.Saludo2 = (req, res, next) => {
  const Saludo2 = "hola soy saludo2";
  req.Saludo2 = Saludo2;
  next();
};
