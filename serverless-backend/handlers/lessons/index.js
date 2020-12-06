module.exports.main = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify([]),
    headers: {
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
  };
};
