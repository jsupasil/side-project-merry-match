import * as pg from "pg";
import "dotenv/config";

const { Pool } = pg.default;
const db = new Pool({
  connectionString: process.env.DB_URL,
});

export default db;
