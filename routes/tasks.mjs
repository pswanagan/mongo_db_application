import express from "express";
import db from '../db/conn.mjs';


const router = express.Router();




// Get the complete tasks collection

router.get('/', async(req, res) => {
    const collection = await db.collection("tasks");
    try {
        const documents = await collection.find({}).toArray();
        return res.send(documents).status(202);
    } catch (error) {
        console.error(`Error retrieving documents from Tasks:`, err);
        return [];
    }
})

//Get a single task entry

router.get('/:id', async (req, res) => {
    let collection = await db.collection("tasks");
    let query = {task_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})

// Create a new task

router.post('/', async (req, res) => {
    let collection = await db.collection('tasks');
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad Request').status(400);
    else res.send(result).status(200);
  });

    // Delete a task by task_id
  
router.delete('/:id', async (req, res) => {
    let collection = await db.collection('tasks');
    let query = { task_id: req.params.id };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send('Not found').status(404);
    else res.send('Task has been deleted').status(200);
  });

export default router;