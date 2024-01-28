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
    try{
    let collection = await db.collection("tasks");
    let query = {task_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
    }catch {
        console.error("Error getting tasks:", err);
        res.status(500).send("Something went wrong.");
    }
})

// Create a new task
router.post('/', async (req, res) => {
    try {
    let collection = await db.collection('tasks');
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad Request').status(400);
    else res.send(result).status(200);
}catch {
    console.error("Error creating task:", err);
    res.status(500).send("Something went wrong.");
}
  });

    // Delete a task by task_id
  
router.delete('/:id', async (req, res) => {
    try{
    let collection = await db.collection('tasks');
    let query = { task_id: req.params.id };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send('Not found').status(404);
    else res.send('Task has been deleted').status(200);
    }catch {
        console.error("Error deleting task:", err);
        res.status(500).send("Something went wrong.");
    }
  });

  // Modify an employee entry

  router.patch('/:id', async(req, res) => {
    try{
    let collection = await db.collection('tasks');

    let result = await collection.updateOne({task_id: req.params.id}, {$set: req.body});
    if (result.modifiedCount === 0) {
        res.status(404).send('No documents matched the query. Updated 0 documents.');
    } else {
        res.status(200).send(`Successfully updated document with id ${req.params.id}`);
    }
} catch (err){
    console.error("Error updating task:", err);
    res.status(500).send("Something went wrong.");
}

  });
export default router;