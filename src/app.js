const express = require("express");

//2. crearnos una constante app que tendra
//todas las funcionalidades de express

const routes = {
  users: "/api/v1/users",
  repairs: "/api/v1/repairs",
};
//routes
const userRouter = require("./motorcycleRepair/routes/user.routes");
const repairRouter = require("./motorcycleRepair/routes/repairs.routes");

const app = express();

//midleware, para q el backend lea Json en el body
app.use(express.json());

//midleware, para q el backend lea url-encoded en el body

app.use(express.urlencoded({ extended: true }));

app.use(routes.users, userRouter);
app.use(routes.repairs, repairRouter);

module.exports = app;
