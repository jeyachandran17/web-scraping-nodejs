import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import cors from "cors";
import { MongoClient } from "mongodb";
import mobileRouter from "./router/mobiles.router.js"
import earphoneRouter from "./router/earphone.router.js"
import watchRouter from "./router/smartwatch.router.js"
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 web scraping🎊✨🤩");
});

app.use('/mobiles', mobileRouter);
app.use('/earphones', earphoneRouter);
app.use('/smartwatch', watchRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
