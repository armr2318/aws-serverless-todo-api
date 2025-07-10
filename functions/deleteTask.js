import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const db = new DynamoDBClient();

export const handler = async (event) => {
  const { taskId } = event.pathParameters || {};

  if (!taskId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing taskId in path." }),
    };
  }

  try {
    await db.send(new DeleteItemCommand({
      TableName: process.env.TABLE_NAME,
      Key: {
        taskId: { S: taskId },
      },
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Task deleted successfully." }),
    };
  } catch (error) {
    console.error("Error deleting task:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not delete task." }),
    };
  }
};
