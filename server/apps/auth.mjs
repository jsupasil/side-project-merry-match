import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import multer from "multer";

const authRouter = Router();

const multerUpload = multer({ dest: "uploads/" });
const profileImagesUpload = multerUpload.fields([
  { name: "profileImages", maxCount: 5 },
]);

authRouter.post("/register", profileImagesUpload, async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const userProfile = {
    name: req.body.name,
    birthdate: req.body.birthdate,
    location: req.body.location,
    city: req.body.city,
    sex_iden: req.body.sexIden,
  };

  console.log(req.files.avatar);

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);

  return res.status(201).json({
    message: "User has been created successfully",
  });
});

authRouter.post("/login", async (req, res) => {});
