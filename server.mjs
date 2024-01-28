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


const employeeSchema = {
    $jsonSchema: {
      bsonType: "object",
      title: "Employee Validation",
      required: ["employee_id", "first_name", "last_name", "email", "project", "tasks"],
      properties: {
        employee_id: {
          bsonType: "string",
          description: "'employee_id' is required and must be a string"
        },
        first_name: {
          bsonType: "string",
          description: "'first_name' is required and must be a string"
        },
        last_name: {
          bsonType: "string",
          description: "'last_name' is required and must be a string"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\..+$",
          description: "'email' is required and must be a valid email address"
        },
        project: {
          bsonType: ["array"],
          items: {
            bsonType: "string",
            description: "'project' must be an array of string project IDs"
          }
        },
        tasks: {
          bsonType: ["array"],
          items: {
            bsonType: "string",
            description: "'tasks' must be an array of string task IDs"
          }
        }
      }
    }
  };

  // Find invalid documents.
app.get("/valid", async (req, res) => {
    let collection = await db.collection("employees");
  
    let result = await collection.find({ $nor: [employeeSchema] }).toArray();
    res.send(result).status(204);
  });
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});