const Pool = require("pg").Pool;
const pool = new Pool({
  user: "preet",
  host: "localhost",
  database: "pern_todo",
  password: "preet1",
  port: 5432,
});
module.exports = pool;
