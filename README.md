# AWS Serverless To-Do List API

A fully serverless REST API for managing a to-do list using AWS Lambda, API Gateway, and DynamoDB — deployed with AWS SAM and defined entirely in infrastructure-as-code.

---

##  Features

- `GET /tasks` – Retrieve all tasks
- `POST /tasks` – Create a new task
- `DELETE /tasks/{taskId}` – Delete a task by its ID
- Fully managed, scalable, and pay-as-you-go infrastructure

---

##  Built With

- **AWS Lambda** – Serverless compute
- **Amazon API Gateway** – RESTful API access
- **Amazon DynamoDB** – NoSQL task storage
- **AWS CloudFormation / SAM** – Infrastructure as Code (IaC)
- **Node.js (ES Modules)** – Runtime for Lambda functions

---

##  Project Structure

```text
aws-serverless-todo-api/
│
├── functions/
│   ├── getTasks.js         # Lambda for GET /tasks
│   ├── addTask.js          # Lambda for POST /tasks
│   └── deleteTask.js       # Lambda for DELETE /tasks/{taskId}
│
├── template.yaml           # CloudFormation (SAM) template
├── deploy.sh               # Shell script to deploy the stack
├── .gitignore              # Ignore files like node_modules and .env
└── README.md               # Project documentation

 Architecture Diagram

+----------------------------+
|        API Gateway         |
|   (GET, POST, DELETE)      |
+------------+---------------+
             |
             v
+----------------------------+
|         AWS Lambda         |
|   (getTasks, addTask, etc) |
+------------+---------------+
             |
             v
+----------------------------+
|        DynamoDB Table      |
|         TasksTable         |
+----------------------------+


Deployment Guide
Prerequisites

    AWS CLI and AWS SAM CLI

    AWS credentials configured (aws configure)

    An S3 bucket for deployment packaging (SAM will prompt you)

One-Time Setup

sam build
sam deploy --guided

Respond to prompts:

    Stack Name: serverless-todo-api

    AWS Region: us-east-1 (or your preferred region)

    Accept defaults and save config file for reuse

 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Add new task
DELETE	/tasks/{taskId}	Delete task by ID

Test using curl or Postman:

curl https://<api-id>.execute-api.<region>.amazonaws.com/Prod/tasks

 Cleanup

To avoid ongoing AWS charges, delete the stack:

aws cloudformation delete-stack --stack-name serverless-todo-api

 Notes

    This project is eligible for the AWS Free Tier

    Use environment variables and IAM roles securely (no hardcoded credentials)

    Can be extended with PUT (edit task), auth via AWS Cognito, or task completion flags

 Resources

    AWS SAM Documentation

    AWS SDK for JavaScript v3

    Amazon DynamoDB

    Postman API Testing
