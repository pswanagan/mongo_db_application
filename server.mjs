import express from 'express';
import 'dotenv/config';
import db from './db/conn.mjs';
const PORT = process.env.PORT || 5050;
const app = express();
import projects from './routes/projects.mjs';
import tasks from './routes/tasks.mjs';
import employees from './routes/employees.mjs';
import seed from './routes/seed.mjs';
app.use(express.json());

app.use('/projects', projects);
app.use('/tasks', tasks);
app.use('/employees', employees);
app.use('/seed', seed);


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});