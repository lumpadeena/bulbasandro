import fastify from "fastify";
import ping from "./routes/ping.js";

let app = fastify();
app.register(ping);

app.listen({ port: 8080 }, (error: Error | null, address: string) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.info(`Bulbasandro's core server is listening at ${address}.`);
});
