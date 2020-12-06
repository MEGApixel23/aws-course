const { DynamoDB } = require('aws-sdk');
const { v4 } = require('uuid');

const dynamoDb = new DynamoDB.DocumentClient();

module.exports.main = async (event) => {
  const { title, url } = JSON.parse(event.body);
  const lesson = {
    id: v4(),
    title,
    url,
    createdAt: new Date().toISOString(),
  };

  await dynamoDb.put({
    TableName: process.env.LESSONS_TABLE,
    Item: lesson,
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(lesson),
    headers: {
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
  };
}
