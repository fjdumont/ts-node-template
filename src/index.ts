import dotenv from "dotenv";
dotenv.config();

console.log(`The answer is ${process.env.ANSWER || 42}!`);
