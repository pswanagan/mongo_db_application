import express from "express";
import db from '../db/conn.mjs';

const router = express.Router();




// Get the complete employees collection

router.get('/', async(req, res) => {
    const collection = await db.collection("employees");
    try {
        const documents = await collection.find({}).toArray();
        return res.send(documents).status(202);
    } catch (error) {
        console.error(`Error retrieving documents from Employees:`, err);
        return [];
    }
})


//Get an employee by number

router.get('/:id', async (req, res) => {
    try{
    let collection = await db.collection("employees");
    let query = {employee_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Employee doesn't exist.").status(404)
    else res.send(result).status(202)
    } catch {
        console.error("Error getting employee:", err);
        res.status(500).send("Something went wrong.");
    }
});

// Create a new employee
router.post('/', async (req, res) => {
    try{
    let collection = await db.collection('employees');
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad Request').status(400);
    else res.send(result).status(200);
    } catch {
        console.error("Error creating employee:", err);
        res.status(500).send("Something went wrong.");
    }
  });

    // Delete an employee by employee_id
  
router.delete('/:id', async (req, res) => {
    try{
    let collection = await db.collection('employees');
    let query = { employee_id: req.params.id };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send('Not found').status(404);
    else res.send('Employee has been deleted').status(200);
    } catch (err) {
        console.error("Error deleting employee:", err);
        res.status(500).send("Something went wrong.");
    }
  });

  // Modify an employee entry

  router.patch('/:id', async(req, res) => {
    try{
    let collection = await db.collection('employees');

    let result = await collection.updateOne({employee_id: req.params.id}, {$set: req.body});
    if (result.modifiedCount === 0) {
        res.status(404).send('No documents matched the query. Updated 0 documents.');
    } else {
        res.status(200).send(`Successfully updated document with id ${req.params.id}`);
    }
} catch (err){
    console.error("Error updating document:", err);
    res.status(500).send("Something went wrong.");
}

  });

export default router;