//clase2
//comandos directorio
//https://platzi.com/tutoriales/2292-terminal/10689-libreria-de-comandos-de-la-terminal-con-instrucciones-y-ejemplos/
//desarrollo backend
//instalacion de librerias:
// express: https://expressjs.com/en/starter/installing.html
//COMANDOS:
// npm init -y (con parametros por defecto)
//npm install express (instala express)
//arquitectura MVC  (usa tres componentes MODELO(datos-logica del negocio)
// VISTA(interfaz de usuario)
// CONTROLADOR(CONEXION ENTRE MODELO Y VISTA))
//, arquitectura LIMPIA (dseño de sofw separa y ordena el codigo en capas
// internas(logica del negocio, capas externas (interfaz de usuario - db)))

//express:
// *es un FRAMEWORK muy usado con NODE.JS para desarrollo web, simplifica la creacion de aplicaiciones
//web y APIs
//*usa routing simplificado (solicitudes HTTP):GET,POST,PUT,DELETE, y rutas especificas
//*sus fns Middleware se ejecutan durante el procesamiento de una solicitud, realiza tareas
//de autenticacion, registro, emtre otros.
//*facilita renderizacion (manejo de vistas y plantillas), renderiza vistas y enviarlas como respuesta
//a solicitudes del cliente
//*gestiona sesiones de y cookies, para ña gestion de informacion del usuario
//amplio ecosistema, permite añadir funcionalidades adicionales a su aplicacion sin tener q
//iniciar de cero

//ejemplo para conectar el servidor local con el navegador
//1. importar express
const express = require("express");

//2. crearnos una constante app que tendra
//todas las funcionalidades de express
const app = express();
//midleware, para q el backend lea Json en el body
app.use(express.json());

//midleware, para q el backend lea url-encoded en el body
app.use(express.urlencoded({ extended: true }));

//definicion funciones
//callback
const findAll = (req, res) => {
  return res.status(200).json({
    message: "method get-findAll",
  });
};

const create = (req, res) => {
  const disease = req.body;

  console.log(req.body);
  return res.status(201).json({
    message: "method post-create",
    data: disease,
  });
};

const findOne = (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    message: "method get-findone",
    id: req.params.id,
  });
};

const update = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: "method patch",
    id,
  });
};

const DELETE = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: "method delete",
    id,
  });
};

//3. definir el endpoint
app.get("/api/v1/genetic-diseases", findAll);

app.post("/api/v1/genetic-diseases", create);

app.get("/api/v1/genetic-diseases/:id", findOne);

app.patch("/api/v1/genetic-diseases/:id", update);

app.delete("/api/v1/genetic-diseases/:id", DELETE);

//4.poner a escuchar el servidor por un puerto
app.listen(3000, () => {
  console.log("Server running on port: " + 3000);
});

//servidor local -> direccion ip de loopback
//127.0.0.1 -> localhost
//localhost:5500
