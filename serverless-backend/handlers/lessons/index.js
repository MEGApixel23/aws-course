const { DynamoDB } = require('aws-sdk');
const middy = require('@middy/core');
const cors = require('@middy/http-cors');

const dynamoDb = new DynamoDB.DocumentClient();

const main = async () => {
  const result = await dynamoDb.scan({
    TableName: process.env.LESSONS_TABLE,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};

module.exports.main = middy(main)
  .use(cors());
