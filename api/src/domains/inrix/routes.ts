import express, { Request, Response } from "express";
import { inrixapi } from "./controller";
const router = express.Router();

router.get("/token", async (req, res) => {
  const response = await inrixapi();

  console.log(response);
  res.send(response);
});

export default router;
