import express from "express";
import cors from "cors";
import db from "./utils/db.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  console.log("get successful");
  try {
    const users = await db.query("select * from users");
    console.log(users.rows);
    return res.status(200).json({
      message: "get successful",
      data: users.rows,
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/", async (req, res) => {
  console.log("get successful");
  const insertData = req.body;
  try {
    await db.query(
      `insert into users (username, password, email, role) values ($1,$2,$3,$4)`,
      [
        insertData.username,
        insertData.password,
        insertData.email,
        insertData.role,
      ]
    );
    return res.status(200).json({
      message: "get successful",
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log("server start");
});
