const express = require("express");
const embeddingsRouterV1 = require("./router/v1/embeddingsRouter");
const chatRouterV1 = require("./router/v1/chatRourer");
const endPoints = require("./router/endPoints");
require('dotenv').config();

const app = express();

//* Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Routes
const routeVersion = process.env.API_ROUTE_VERSION;
app.use(
  `/api/${routeVersion}/${endPoints.embeddingEndpoints}`,
  embeddingsRouterV1
);
app.use(`/api/${routeVersion}/${endPoints.chatEndPoint}`, chatRouterV1);

app.listen(process.env.PORT);
console.log("Listening on port: ",process.env.PORT)
