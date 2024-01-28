import express from "express";
import db from '../db/conn.mjs';

const router = express.Router();




// Get the complete projects collections

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

//Get a project by project_id

router.get('/:id', async (req, res) => {
    let collection = await db.collection("projects");
    let query = {project_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})

// Create a new project

router.post('/', async (req, res) => {
    let collection = await db.collection('projects');
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad Request').status(400);
    else res.send(result).status(200);
  });


export default router;