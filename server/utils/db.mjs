import * as pg from "pg";
const { Pool } = pg.default;
import "dotenv/config";

const db = new Pool({
  connectionString: process.env.DB_URL,
});

export default db;
