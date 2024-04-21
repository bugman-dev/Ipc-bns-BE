const express = require("express");
require('dotenv').config();
const embeddingsRouterV1 = require("./router/v1/embeddingsRouter");
const chatRouterV1 = require("./router/v1/chatRourer");
const endPoints = require("./router/endPoints");

const app = express();

//* Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hi")
})

//* Routes
const routeVersion = process.env.API_ROUTE_VERSION;
app.use(
  `/api/${routeVersion}${endPoints.embeddingEndpoints}`,
  embeddingsRouterV1
);
app.use(`/api/${routeVersion}${endPoints.chatEndPoint}`, chatRouterV1);

app.listen(process.env.PORT || 5000);
console.log("Listening on port: ",process.env.PORT)
