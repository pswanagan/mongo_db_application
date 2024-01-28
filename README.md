Project Name

Overview

This project is a Node.js application using Express to manage and interact with a MongoDB database. It's structured to handle data related to employees, projects, and tasks.

Getting Started

Prerequisites
Node.js
MongoDB


Installation
Clone the repository.
Install dependencies: npm install
Set up your MongoDB connection in db/conn.mjs.

Environment Variables
PORT: Port number for the server (default is 5050).

Usage
The application includes several routes to interact with the database:


API Routes and CRUD Operations
Employee Routes

/employees: Employee data management.
GET /employees: Retrieve a list of all employees.
GET /employees/:id: Fetch details of a specific employee.
POST /employees: Create a new employee.
PATCH /employees/:id: Update an existing employee's details.
DELETE /employees/:id: Remove an employee from the database.

Project Routes

/projects: Manage project data.

GET /projects: List all projects.
GET /projects/:id: Get details of a specific project.
POST /projects: Add a new project.
PATCH /projects/:id: Update project information.
DELETE /projects/:id: Delete a project.

Task Routes

/tasks: Handle task-related operations.

GET /tasks: Fetch all tasks.
GET /tasks/:id: Retrieve a specific task's details.
POST /tasks: Create a new task.
PATCH /tasks/:id: Update details of an existing task.
DELETE /tasks/:id: Delete a task from the system.

Seed Routes

/seed: Seed database with initial data.

Get /seed: populate intial data into the database

Features

Employee Management: CRUD operations for employees with data validation.
Project Tracking: Manage project details.
Task Assignment: Handle task assignments to employees.

Data Validation
Schema validation is implemented for employee data, ensuring integrity and consistency.

Running the Server
Start the server using npm start. It listens on the specified PORT.

Contact

Project link: https://github.com/pswanagan/mongo_db_application