import express, { Request, Response } from "express";
import { getMessage } from "./controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const response = getMessage();
  res.send(response);
});

export default router;
