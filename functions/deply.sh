#!/bin/bash

# Exit if any command fails
set -e

# Set your preferred AWS region
REGION="us-east-1"

# Name of the SAM stack
STACK_NAME="serverless-todo-api"

# S3 bucket for SAM artifacts (must exist in your account)
S3_BUCKET="your-sam-artifacts-bucket-name"

# Optional: specify a CloudFormation capabilities flag
CAPABILITIES="CAPABILITY_IAM"

echo "✅ Building the SAM app..."
sam build

echo "🚀 Deploying to AWS..."
sam deploy \
  --stack-name $STACK_NAME \
  --region $REGION \
  --s3-bucket $S3_BUCKET \
  --capabilities $CAPABILITIES \
  --confirm-changeset \
  --no-fail-on-empty-changeset

echo "🎉 Deployment complete!"
