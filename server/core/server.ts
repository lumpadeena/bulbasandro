import BUILDER from "./application.js";
import CONFIGS from "./configs.js";

const APPLICATION = BUILDER({
  logger: true,
});

APPLICATION.listen(
  { port: CONFIGS.server.port },
  (error: Error | null, address: string) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    console.info(`Core is listening at ${address}.`);
  }
);
