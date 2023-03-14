import express from "express"; 
import { client } from "../index.js";
const router = express.Router();

router.post("/flipkart", async function (request, response) {
    const flipkart = request.body;
    const result = await client.db("flipkart").collection("earphone").insertMany(flipkart);
    response.send(result);
})

router.post("/amazon", async function (request, response) {
    const amazon = request.body;
    const result = await client.db("amazon").collection("earphone").insertMany(amazon);
    response.send(result);
})

router.post("/snapdeal", async function (request, response) {
    const snapdeal = request.body;
    const result = await client.db("snapdeal").collection("earphone").insertMany(snapdeal);
    response.send(result);
})



router.get('/', async function (request, response) {
    const flipkart = await client.db("flipkart").collection("earphone").find({}).toArray();
    const amazon = await client.db("amazon").collection("earphone").find({}).toArray();
    const snapdeal = await client.db("snapdeal").collection("earphone").find({}).toArray();
    const moblile = [...flipkart,... amazon,... snapdeal];
    response.send(moblile);
})

export default router;
