import fastify from "fastify";

fastify().listen({ port: 8080 }, (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.info(`Bulbasandro's Core is listening at ${address}.`);
});
