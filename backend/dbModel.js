const Pool = require("pg").Pool;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });
const pool = new Pool({
  host: "localhost",
  database: "pern_todo",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});
module.exports = pool;
