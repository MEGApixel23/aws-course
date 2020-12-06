const { DynamoDB } = require('aws-sdk');

const dynamoDb = new DynamoDB.DocumentClient();

module.exports.main = async () => {
  const result = await dynamoDb.scan({
    TableName: process.env.LESSONS_TABLE,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
    headers: {
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
  };
};
