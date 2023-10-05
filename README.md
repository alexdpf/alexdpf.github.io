# Notes App #

## Summary ##
### The **Notes App** The Notes App is a comprehensive solution that provides a platform for users to create, manage, and delete notes. A distinguishing feature is the ability to attach files to notes, ensuring a more dynamic note-taking experience. Built on top of AWS, this application leverages Lambda for serverless functions, APIs for backend functionality, S3 for storage (including file attachments), DynamoDB tables for persistent data storage, Cognito for user authentication, and React for the frontend.

This application was developed using the **SST Framework**. It was built on AWS, and incorporates the following technologies:

## Prerequisites ##

### Before you start, ensure you have the following installed: ###

    - Node.js & pnpm
    - AWS CLI
    - SST CLI

## Architecture ##
### Backend:
- **Lambda**: Serverless functions for handling various operations.
- **APIs**: Backend functionality to interact with the frontend.
- **S3**: Storage for user-uploaded files.
- **DynamoDB**: Tables to store notes and their associated metadata.
- **Cognito**: User authentication and access management.
### Frontend:
- **React**: A JavaScript library for building user interfaces.

## Getting Started ##

1. **Install Dependencies**:
   Run `pnpm install` to install the necessary dependencies for the project.

2. **Set Up AWS Credentials**:
   Ensure that you have AWS credentials set up for CLI usage.

3. **Deploy the App**:
   Run `sst deploy` to deploy the app to your AWS environment.

## Testing ##

To run tests, execute the following:

```javascript
import { it } from "vitest";
import { initProject } from "sst/project";
import { App, getStack } from "sst/constructs";
import { StorageStack } from "../StorageStack"; 
import { Template } from "aws-cdk-lib/assertions";

it("Test StorageStack", async () => {
    await initProject({});
    const app = new App({ mode: "deploy" });
    // WHEN 
    app.stack(StorageStack);
    // THEN 
    const template = Template.fromStack(getStack(StorageStack));
    template.hasResourceProperties("AWS::DynamoDB::Table", { 
        BillingMode: "PAY_PER_REQUEST",
    }); 
});

Tasks

 Deploy the Backend
 Set up the Frontend
 Ensure all tests pass

     Launch the app
