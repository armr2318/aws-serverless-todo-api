import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const db = new DynamoDBClient();

export const handler = async () => {
  try {
    const data = await db.send(new ScanCommand({
      TableName: process.env.TABLE_NAME,
    }));

    const tasks = data.Items.map(item => unmarshall(item));

    return {
      statusCode: 200,
      body: JSON.stringify(tasks),
    };
  } catch (error) {
    console.error("getTasks error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch tasks." }),
    };
  }
};
