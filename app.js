import { getAdvice } from "./advice.js";
import { translator } from "./translator.js";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/advice", async (req, res) => {
  const advice = await getAdvice();
  const italianAdvice = await translator(advice);
  console.log(advice);
  console.log(italianAdvice);
  res.send(italianAdvice);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
