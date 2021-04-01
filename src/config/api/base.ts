const ensureEnvVariable = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error("Missing environment variable: " + envVar);
  }
};

ensureEnvVariable("PROGEN_BASE_URL");

const API_V1 = "api/v1"

export const PROGEN_BASE_URL = `${process.env.PROGEN_BASE_URL}/${API_V1}`;

