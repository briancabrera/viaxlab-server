import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from 'cors';
import { ErrorRequestHandler } from "express";

import { router } from "./routes/index";
import { handleError } from "./api/middlewares/error-handler.middleware";

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cors());
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/", router);

server.use(handleError)

module.exports = server;