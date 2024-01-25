import express from "express";
import db from '../db/conn.mjs';


const router = express.Router();





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