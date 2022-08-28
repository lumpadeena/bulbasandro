import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

export default function (
  fastify: FastifyInstance,
  opts: object,
  done: Function
) {
  fastify.get("/status", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({
      data: {
        status: "up",
        timestamp: new Date(),
        uptime: process.uptime(),
        version: process.env.npm_package_version,
      },
    });
  });

  done();
}
