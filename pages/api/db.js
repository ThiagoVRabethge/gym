import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'db.jfromkdlhhwdtyhsnivz.supabase.co',
    database: 'postgres',
    password: 'QgnBV4thi4A8aUPE',
    port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};