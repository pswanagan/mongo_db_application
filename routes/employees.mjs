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
    let collection = await db.collection("employees");
    let query = {employee_id: req.params.id}
    let result = await collection.findOne(query);

    if (!result) res.send("Employee doesn't exist.").status(404)
    else res.send(result).status(202)
})

// Create a new employee
router.post('/', async (req, res) => {
    let collection = await db.collection('employees');
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    if (!result) res.send('Bad Request').status(400);
    else res.send(result).status(200);
  });


export default router;