const { getConnection } = require('../../services/mysql');

module.exports.main = async () => {
  const conn = await getConnection();
  const lessons = await conn.query('SELECT * FROM `lessons`');

  await conn.end();

  return {
    statusCode: 200,
    body: JSON.stringify(lessons),
    headers: {
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
  };
};
