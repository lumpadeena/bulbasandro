import { config } from "dotenv";

config();

const CONFIGS = {
  server: {
    name: process.env.NAME,
    port: +(process.env.PORT ?? "") || 20001,
  },
};

export default CONFIGS;
