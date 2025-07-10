# AWS Serverless To-Do List API

This project is a fully serverless REST API built on AWS using CloudFormation and the Serverless Application Model (SAM). It provides basic CRUD operations for managing tasks in a DynamoDB table via Lambda functions and API Gateway.

---

## Features

- **GET /tasks** — Retrieve all tasks
- **POST /tasks** — Add a new task
- **DELETE /tasks/{id}** — Delete a task by ID
- Stateless and fully managed infrastructure
- Infrastructure as Code via AWS CloudFormation

---

## Technologies Used

- **AWS Lambda** (Node.js runtime)
- **Amazon API Gateway**
- **Amazon DynamoDB**
- **AWS SAM / CloudFormation**
- **IAM**, **CloudWatch**

---

## Project Structure

aws-serverless-todo-api/
├── functions/
│ ├── getTasks.js # Lambda for GET /tasks
│ ├── addTask.js # Lambda for POST /tasks
│ └── deleteTask.js # Lambda for DELETE /tasks/{id}
├── template.yaml # CloudFormation template (SAM format)
├── deploy.sh # Deployment script using AWS CLI
├── README.md # Project documentation
└── .gitignore # Ignore node_modules, credentials, etc.

---

##  How to Deploy

### Prerequisites

- AWS CLI and AWS SAM CLI installed
- AWS credentials configured (`aws configure`)
- An S3 bucket for SAM deployment packaging
- An existing DynamoDB table (or define one in the template)

### Deploy Steps

```bash
# 1. Package and deploy using SAM
sam build
sam deploy --guided
Follow the prompts:

    Stack name: serverless-todo-api

    Region: us-east-1 (or your choice)

    Accept default capabilities and confirm deploymen
