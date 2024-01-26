import express from "express";
import db from '../db/conn.mjs';

const router = express.Router();

const collectionNames = ['employees', 'projects', 'tasks'];

const data = [
    [{
        "employee_id": "1",
        "first_name": "Charlena",
        "last_name": "Janouch",
        "email": "cjanouch0@washingtonpost.com",
        "project": [
            "1"
        ],
        "tasks": [
            "1"
        ]
    },
    {
        "employee_id": "2",
        "first_name": "Waring",
        "last_name": "Valdes",
        "email": "wvaldes1@nifty.com",
        "project": [
            "13"
        ],
        "tasks": [
            "13"
        ]
    },
    {
        "employee_id": "3",
        "first_name": "Augie",
        "last_name": "Huniwall",
        "email": "ahuniwall2@weather.com",
        "project": [
            "10"
        ],
        "tasks": [
            "10"
        ]
    },
    {
        "employee_id": "4",
        "first_name": "Holly",
        "last_name": "Chichgar",
        "email": "hchichgar3@blinklist.com",
        "project": [
            "4"
        ],
        "tasks": [
            "4"
        ]
    },
    {
        "employee_id": "5",
        "first_name": "Dolf",
        "last_name": "Spilisy",
        "email": "dspilisy4@epa.gov",
        "project": [
            "11"
        ],
        "tasks": [
            "11"
        ]
    },
    {
        "employee_id": "6",
        "first_name": "Rancell",
        "last_name": "Juett",
        "email": "rjuett5@bigcartel.com",
        "project": [
            "6"
        ],
        "tasks": [
            "6"
        ]
    },
    {
        "employee_id": "7",
        "first_name": "Arlan",
        "last_name": "Eagling",
        "email": "aeagling6@cmu.edu",
        "project": [
            "2"
        ],
        "tasks": [
            "2"
        ]
    },
    {

        "employee_id": "8",
        "first_name": "Edgard",
        "last_name": "Croughan",
        "email": "ecroughan7@zdnet.com",
        "project": [
            "14"
        ],
        "tasks": [
            "14"
        ]
    },
    {
        "employee_id": "9",
        "first_name": "Nanny",
        "last_name": "Pendred",
        "email": "npendred8@google.pl",
        "project": [
            "12"
        ],
        "tasks": [
            "12"
        ]
    },
    {
        "employee_id": "10",
        "first_name": "Colly",
        "last_name": "Loche",
        "email": "cloche9@nymag.com",
        "project": [
            "13"
        ],
        "tasks": [
            "13"
        ]
    },
    {

        "employee_id": "11",
        "first_name": "Cybil",
        "last_name": "Toner",
        "email": "ctonera@aboutads.info",
        "project": [
            "4"
        ],
        "tasks": [
            "4"
        ]
    },
    {
        "employee_id": "12",
        "first_name": "Alvis",
        "last_name": "Klaesson",
        "email": "aklaessonb@technorati.com",
        "project": [
            "11"
        ],
        "tasks": [
            "11"
        ]
    },
    {
        "employee_id": "13",
        "first_name": "Karie",
        "last_name": "Crawshay",
        "email": "kcrawshayc@si.edu",
        "project": [
            "8"
        ],
        "tasks": [
            "8"
        ]
    },
    {
        "employee_id": "14",
        "first_name": "Chauncey",
        "last_name": "Caskey",
        "email": "ccaskeyd@chronoengine.com",
        "project": [
            "15"
        ],
        "tasks": [
            "15"
        ]
    },
    {
        "employee_id": "15",
        "first_name": "Ally",
        "last_name": "Radki",
        "email": "aradkie@spiegel.de",
        "project": [
            "3"
        ],
        "tasks": [
            "N/A"
        ]
    },
    {
        "employee_id": "16",
        "first_name": "Matteo",
        "last_name": "Druett",
        "email": "mdruettf@indiatimes.com",
        "project": [
            "11"
        ],
        "tasks": [
            "11"
        ]
    },
    {
        "employee_id": "17",
        "first_name": "Goldie",
        "last_name": "Corn",
        "email": "gcorng@lycos.com",
        "project": [
            "7"
        ],
        "tasks": [
            "7"
        ]
    },
    {
        "employee_id": "18",
        "first_name": "Arliene",
        "last_name": "Monson",
        "email": "amonsonh@jalbum.net",
        "project": [
            "9"
        ],
        "tasks": [
            "9"
        ]
    },
    {
        "employee_id": "19",
        "first_name": "Darbee",
        "last_name": "Scoggin",
        "email": "dscoggini@fema.gov",
        "project": [
            "5"
        ],
        "tasks": [
            "5"
        ]
    },
    {
        "employee_id": "20",
        "first_name": "Charlot",
        "last_name": "Thackwray",
        "email": "cthackwrayj@squarespace.com",
        "project": [
            "13"
        ],
        "tasks": [
            "13"
        ]
    }],
    [{
        "name": "Website Redesign",
        "description": "Redesign the company's website to improve user experience and modernize the design.",
        "team_members": [
            "1"
        ],
        "project_id": "1"
    },
    {
        "name": "Inventory Management System",
        "description": "Develop a system for managing inventory levels, tracking stock, and generating reports.",
        "team_members": [
            "7"
        ],
        "project_id": "2"
    },
    {
        "name": "Mobile App Development",
        "description": "Create a mobile app for both iOS and Android platforms to expand our reach to mobile users",
        "team_members": [
            "15"
        ],
        "project_id": "3"
    },
    {
        "name": "Marketing Campaign Launch",
        "description": "Plan and execute a marketing campaign to promote our new product launch.",
        "team_members": [
            "4",
            "11"
        ],
        "project_id": "4"
    },
    {
        "name": "Customer Support Portal Enhancement",
        "description": "Enhance the customer support portal with new features and a more intuitive interface.",
        "team_members": [
            "19"
        ],
        "project_id": "5"
    },
    {
        "name": "Data Analytics Dashboard",
        "description": "Build a dashboard for analyzing and visualizing key business data for better decision-making.",
        "team_members": [
            "6"
        ],
        "project_id": "6"
    },
    {
        "name": "Infrastructure Upgrade",
        "description": "Upgrade the company's IT infrastructure to improve performance and security.",
        "team_members": [
            "17"
        ],
        "project_id": "7"
    },
    {
        "name": "Employee Training Program",
        "description": "Develop an employee training program to enhance skills and knowledge.",
        "team_members": [
            "13"
        ],
        "project_id": "8"
    },
    {
        "name": "Market Research Study",
        "description": "Conduct a comprehensive market research study to identify new opportunities and trends.",
        "team_members": [
            "18"
        ],
        "project_id": "9"
    },
    {
        "name": "Product Testing and Quality Assurance",
        "description": "Perform rigorous testing and quality assurance on our latest product release to ensure a bug-free experience for users.",
        "team_members": [
            "3"
        ],
        "project_id": "10"
    },
    {
        "name": "Financial Reporting System",
        "description": "Create a system for generating financial reports and analysis for the finance department.",
        "team_members": [
            "5",
            "12",
            "16"
        ],
        "project_id": "11"
    },
    {
        "name": "Expansion Strategy Planning",
        "description": "Formulate a strategic plan for expanding the company's market presence into new regions.",
        "team_members": [
            "9"
        ],
        "project_id": "12"
    },
    {
        "name": "Employee Wellness Program",
        "description": "Launch a wellness program to improve the health and well-being of employees.",
        "team_members": [
            "20",
            "2",
            "10"
        ],
        "project_id": "13"
    },
    {
        "name": "Social Media Marketing Strategy",
        "description": "Develop a comprehensive social media marketing strategy to engage with our target audience.",
        "team_members": [
            "8"
        ],
        "project_id": "14"
    },
    {
        "name": "Supply Chain Optimization",
        "description": "Optimize the supply chain operations to reduce costs and improve efficiency.",
        "team_members": [
            "14"
        ],
        "project_id": "15"
    }],
    [ {
        "task_name": "Homepage Redesign",
        "deadline": "2024-03-15T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Redesign the homepage with a modern layout.",
        "task_id": "1",
        "project_reference_id": "1"
    },
    {
        "task_name": "Inventory Data Migration",
        "deadline": "2024-04-10T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Migrate existing inventory data to the new system.",
        "task_id": "2",
        "project_reference_id": "2"
    },
    {
        "task_name": "Mobile App UI Design",
        "deadline": "2024-03-20T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Design the user interface for the mobile app.",
        "task_id": "3",
        "project_reference_id": "3"
    },
    {
        "task_name": "Marketing Campaign Content Creation",
        "deadline": "2024-04-05T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Create content for the marketing campaign.",
        "task_id": "4",
        "project_reference_id": "4"
    },
    {
        "task_name": "Support Portal Bug Fixes",
        "deadline": "2024-03-25T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Identify and fix bugs in the support portal.",
        "task_id": "5",
        "project_reference_id": "5"
    },
    {
        "task_name": "Data Dashboard Backend Development",
        "deadline": "2024-04-15T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Develop the backend for the data analytics dashboard.",
        "task_id": "6",
        "project_reference_id": "6"
    },
    {
        "task_name": "Server Hardware Upgrade",
        "deadline": "2024-04-30T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Procure and install new server hardware.",
        "task_id": "7",
        "project_reference_id": "7"
    },
    {
        "task_name": "Employee Training Materials Creation",
        "deadline": "2024-03-30T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Create training materials for the employee training program.",
        "task_id": "8",
        "project_reference_id": "8"
    },
    {
        "task_name": "Market Research Data Analysis",
        "deadline": "2024-03-20T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Analyze data collected in the market research study.",
        "task_id": "9",
        "project_reference_id": "9"
    },
    {
        "task_name": "Product Testing Phase 1",
        "deadline": "2024-03-15T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Conduct initial testing of the product.",
        "task_id": "10",
        "project_reference_id": "10"
    },
    {
        "task_name": "Financial Report Generation",
        "deadline": "2024-04-10T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Generate monthly financial reports.",
        "task_id": "11",
        "project_reference_id": "11"
    },
    {
        "task_name": "Market Expansion Research",
        "deadline": "2024-03-25T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Research potential markets for expansion.",
        "task_id": "12",
        "project_reference_id": "12"
    },
    {
        "task_name": "Wellness Program Kick-off Event",
        "deadline": "2024-03-20T00:00:00.000Z",
        "status": "In Progress",
        "task_description": "Plan and execute the kick-off event for the wellness program.",
        "project_reference_id": "13",
        "task_id": "13"
    },
    {
        "task_name": "Social Media Content Calendar",
        "deadline": "2024-04-05T00:00:00.000Z",
        "status": "Not Started",
        "task_description": "Create a content calendar for social media posts.",
        "project_reference_id": "14",
        "task_id": "14"
    },
    {
        "task_name": "Supply Chain Process Optimization",
        "deadline": "2024-03-25T05:00:00.000Z",
        "status": "Not Started",
        "task_description": "Optimize the supply chain processes.",
        "project_reference_id": "15",
        "task_id": "15"
    }]
];

router.get('/', async (req, res) => {
    try{
    
        for (const [index, collectionName] of collectionNames.entries()) {
            const collection = db.collection(collectionName);
            
            await collection.deleteMany({});
            await collection.insertMany(data[index]);
        }
    
    res.status(200).send("Data Inserted")
    } catch(err){
        res.status(500).send("Something went wrong.");
    }
})


export default router;