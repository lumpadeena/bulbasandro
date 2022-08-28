import { config } from "dotenv";

config();

export default {
  server: {
    port: +(process.env.PORT ?? "") || 20001,
  },
};
