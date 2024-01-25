import express from 'express';
import 'dotenv/config'

const PORT = process.env.PORT || 5050;
const app = express();
import projects from './routes/projects.mjs';
import tasks from './routes/tasks.mjs';
import employees from './routes/employees.mjs';

app.use(express.json());

app.use('/projects', projects);
app.use('/tasks', tasks);
app.use('employees', employees);
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});