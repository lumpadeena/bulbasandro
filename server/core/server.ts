import fastify from "fastify";

import configs from "./configs.js";
import ping from "./routes/ping.js";

let app = fastify({
  logger: true,
});

app.register(ping);

app.listen(
  { port: configs.server.port },
  (error: Error | null, address: string) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.info(`Bulbasandro's core server is listening at ${address}.`);
  }
);
