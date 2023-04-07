import { Pool } from "pg";

// const pool = new Pool({
//     user: 'postgres',
//     host: 'db.jfromkdlhhwdtyhsnivz.supabase.co',
//     database: 'postgres',
//     password: 'QgnBV4thi4A8aUPE',
//     port: 5432,
// });

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PWD,
  port: process.env.PG_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};