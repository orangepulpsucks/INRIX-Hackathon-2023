import express from "express";
import helloWorldHandler from "../domains/hello-world/routes";

const router = express.Router();

// place your route handlers here
router.use("/", helloWorldHandler);

export default router;
