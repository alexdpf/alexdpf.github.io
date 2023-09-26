//Refactoring code to make DRY and create reusable shared behaviours for app reliability abd maintainability
import * as uuid from "uuid"; 
import { Table } from "sst/node/table"; 
import handler from "@notes/core/handler"; 
import dynamoDb from "@notes/core/dynamodb";

export const main = handler(async (event) => { 
    let data = { content: "", 
    attachment: "",
};
    if (event.body != null) { 
        data = JSON.parse(event.body);
}

const params = { TableName: Table.Notes.tableName, 
    Item: { 
        // The attributes of the item to be created 
        userId: "123", // The id of the author 
        noteId: uuid.v1(), // A unique uuid 
        content: data.content, // Parsed from request body 
        attachment: data.attachment, // Parsed from request body 
        createdAt: Date.now(), // Current Unix timestamp
    }, 
};

await dynamoDb.put(params);

return JSON.stringify(params.Item);
});

/*
OLD Version
export async function main(event: APIGatewayProxyEvent) {
    let data, params;
    console.log(event);
    // Request body is passed in as a JSON encoded string in 'event.body' 
    if (event.body) {
        data = JSON.parse(event.body); 
        params = {
            TableName: Table.Notes.tableName,
            Item: {
                // The attributes of the item to be created 
                userId: "123", // The id of the author 
                noteId: uuid.v1(), // A unique uuid 
                content: data.content, // Parsed from request body 
                attachment: data.attachment, // Parsed from request body 
                createdAt: Date.now(), // Current Unix timestamp
            },
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: true }),
        };
    } 
        console.log(params);
    
    try {
        await dynamoDb.put(params).promise(); 
        
        return {
            statusCode: 200, 
            body: JSON.stringify(params.Item),
        };
    } catch (error) {
        let message; 
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        } return {
            statusCode: 500, 
            body: JSON.stringify({ error: message }),
        };
    }
}
*/

//API Endpoint URL
//https://s3vl847if3.execute-api.us-east-1.amazonaws.com