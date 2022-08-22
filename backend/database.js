const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "ddaom.cljzipnanvxj.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "gPfl9145",
  connectionLimit: 5,
  database: "ddaom",
});

module.exports = {
  async run(query, params) {
    return new Promise((resolve, reject) => {
      pool
        .getConnection()
        .then((conn) => {
          conn
            .query(query, params)
            .then((rows) => {
              resolve(rows);
              conn.end(); // (필수) connection 종료
            })
            .catch((err) => {
              console.log(err);
              conn.end(); // (필수) connection 종료
              reject(err);
            });
        })
        .catch((err) => {
          //not connected
          console.log(err);
          reject(err);
        });
    });
  },
};
