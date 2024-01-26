import express from "express";
import db from '../db/conn.mjs';

const router = express.Router();





router.get('/', async(req, res) => {
    const collection = await db.collection("projects");
    try {
        const documents = await collection.find({}).toArray();
        return res.send(documents).status(202);
    } catch (error) {
        console.error(`Error retrieving documents from Projects:`, err);
        return [];
    }
})

//Get a single employee entry
router.get('/:id', async (req, res) => {
    let collection = await db.collection("projects");
    let query = {project_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})



export default router;