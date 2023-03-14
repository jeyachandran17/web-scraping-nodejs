import express from "express"; 
import { client } from "../index.js";
const router = express.Router();

router.post("/filpkart", async function (request, response) {
    const flipkart = request.body;
    const result = await client.db("flipkart").collection("mobiles").insertMany(flipkart);
    response.send(result);
})

router.post("/amazon", async function (request, response) {
    const amazon = request.body;
    const result = await client.db("amazon").collection("mobiles").insertMany(amazon);
    response.send(result);
})

router.post("/snapdeal", async function (request, response) {
    const snapdeal = request.body;
    const result = await client.db("snapdeal").collection("mobiles").insertMany(snapdeal);
    response.send(result);
})



router.get('/', async function (request, response) {
    const flipkart = await client.db("flipkart").collection("mobiles").find({}).toArray();
    const amazon = await client.db("amazon").collection("mobiles").find({}).toArray();
    const snapdeal = await client.db("snapdeal").collection("mobiles").find({}).toArray();
    const moblile = [...flipkart,... amazon,... snapdeal];
    response.send(moblile);
})

export default router;
