import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";

const db = new DynamoDBClient();

export const handler = async (event) => {
  try {
    const { task } = JSON.parse(event.body);

    if (!task) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing task content." }),
      };
    }

    const newTask = {
      taskId: uuidv4(),
      task,
      createdAt: new Date().toISOString(),
    };

    await db.send(new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: marshall(newTask),
    }));

    return {
      statusCode: 201,
      body: JSON.stringify(newTask),
    };
  } catch (error) {
    console.error("addTask error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to add task." }),
    };
  }
};
