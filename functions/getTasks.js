import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const db = new DynamoDBClient();

export const handler = async () => {
  try {
    const result = await db.send(new ScanCommand({
      TableName: process.env.TABLE_NAME,
    }));

    const items = result.Items.map(item => unmarshall(item));

    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error) {
    console.error("Error scanning table:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not fetch tasks." }),
    };
  }
};

