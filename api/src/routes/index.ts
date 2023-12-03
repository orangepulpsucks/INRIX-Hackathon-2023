import express from "express";
import inrixhandler from "../domains/inrix/routes";

const router = express.Router();

// place your route handlers here
router.use("/", inrixhandler);

export default router;
