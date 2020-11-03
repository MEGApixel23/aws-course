import mysql from 'mysql2/promise';

export const getConnection = (() => {
  let connection;

  return () => {
    if (connection === undefined) {
      connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME || 'aa1582j7p84f3g1.c8kptvmfbjsg.us-east-2.rds.amazonaws.com',
        user: process.env.RDS_USERNAME || 'dbusername',
        database: process.env.RDS_DB_NAME || 'ebdb',
        password: process.env.RDS_PASSWORD || 'igorigor23',
        port: process.env.RDS_PORT || 3306
      });
    }

    return connection;
  };
})();
