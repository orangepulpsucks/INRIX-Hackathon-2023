import express from "express";
import inrixhandler from "../domains/inrix/routes";
import weatherHandler from "../domains/openweather/routes";

const router = express.Router();

// place your route handlers here
router.use("/inrix", inrixhandler);
router.use("/weather", weatherHandler);

export default router;
