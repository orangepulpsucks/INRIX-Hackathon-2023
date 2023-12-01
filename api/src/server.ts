import express from "express";
import cors from "cors";
import router from "./routes";

const server = express();

server.use(cors());
// https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
server.use(express.json());
// mount routes
server.use(router);

export default server;
