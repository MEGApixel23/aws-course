const mysql = require('serverless-mysql');

module.exports.getConnection = (() => {
  let connection;

  return () => {
    if (connection === undefined) {
      connection = mysql({
        config: {
          host: process.env.RDS_HOSTNAME,
          user: process.env.RDS_USERNAME,
          database: process.env.RDS_DB_NAME,
          password: process.env.RDS_PASSWORD,
          port: process.env.RDS_PORT,
        }
      });
    }

    return connection;
  };
})();
