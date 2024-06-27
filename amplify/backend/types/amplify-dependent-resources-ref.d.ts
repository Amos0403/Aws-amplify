export type AmplifyDependentResourcesAttributes = {
  "api": {
    "myonlinestore": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "myonlinestore5b43e8c5": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "AppClientSecret": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "CreateOrder": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "ProcessPayment": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "GroceryImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}