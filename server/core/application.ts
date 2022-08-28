import fastify, { FastifyServerOptions } from "fastify";
import ping from "./routes/ping.js";

const BUILDER = (opts: FastifyServerOptions = {}) => {
  const APPLICATION = fastify(opts);
  APPLICATION.register(ping);
  return APPLICATION;
};

export default BUILDER;
