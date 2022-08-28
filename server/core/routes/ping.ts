import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

export default function (
  fastify: FastifyInstance,
  opts: object,
  done: Function
) {
  fastify.get("/ping", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("pong");
  });

  done();
}
