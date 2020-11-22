const { getConnection } = require('../../services/mysql');

module.exports.main = async (event) => {
  const { title, url } = JSON.parse(event.body);
  const conn = await getConnection();
  const { insertId } = await conn.query(
    'INSERT INTO `lessons` (title, url) VALUES (?, ?)',
    [title, url]
  );
  const [lesson] = await conn.query('SELECT * FROM `lessons` WHERE id = ?', [insertId]);

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
