import fastify, { FastifyServerOptions } from "fastify";
import ping from "./routes/ping.js";
import status from "./routes/status.js";

const BUILDER = (opts: FastifyServerOptions = {}) => {
  const APPLICATION = fastify(opts);
  APPLICATION.register(ping);
  APPLICATION.register(status);
  return APPLICATION;
};

export default BUILDER;
