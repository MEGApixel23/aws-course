const { DynamoDB } = require('aws-sdk');
const { v4 } = require('uuid');
const middy = require('@middy/core');
const cors = require('@middy/http-cors');
const jsonBodyParser = require('@middy/http-json-body-parser');
const errorHandler = require('@middy/http-error-handler');
const JSONErrorHandlerMiddleware = require('middy-middleware-json-error-handler');
const validator = require('@middy/validator');

const schema = require('../../validatorSchemas/createLessonSchema');

const dynamoDb = new DynamoDB.DocumentClient();

const main = async (event) => {
  const { title, url } = event.body;
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
    body: JSON.stringify(lesson)
  };
}

module.exports.main = middy(main)
  .use(cors())
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(errorHandler())
  .use(JSONErrorHandlerMiddleware.default());
