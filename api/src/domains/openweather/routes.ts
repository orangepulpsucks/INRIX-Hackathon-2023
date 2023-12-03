import express, { Request, Response } from "express";
import { getWeather } from "./controller";

const router = express.Router();

router.get("/forecast", async (req: Request, res: Response) => {
  const response = await getWeather({ lat: 37.7749, long: 122.4194 });

  res.send(response);
});

export default router;
