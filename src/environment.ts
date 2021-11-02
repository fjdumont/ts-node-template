import dotenv from "dotenv";

const env = dotenv.config().parsed;
if (env === undefined) {
  throw new Error("could not parse dotenv file");
}

export const Environment = {
  answer: parseInt(env.ANSWER),
};
