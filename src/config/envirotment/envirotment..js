require("dotenv").config(); //para uso de las variables de entorno(env)
const env = require("env-var"); //para validar las env
exports.envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_URI: env.get("DB_URI").required().asString(),
};
