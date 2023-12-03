import express, { Request, Response } from "express";
import { CITY_CODES } from "./types";
import { isNumeric } from "../../util/general";

const router = express.Router();

const supportedCitiesResponse = (message: string, codes = CITY_CODES) => {
  return { message, codes };
};

router.get("/forecast", (req: Request, res: Response) => {
  let cityQueryParam = req.query.city as number | undefined;

  if (!cityQueryParam) {
    return res
      .status(400)
      .send(
        supportedCitiesResponse(
          "No city code provided, please provide a numeric city code",
        ),
      );
  }

  if (!isNumeric(cityQueryParam)) {
    return res
      .status(400)
      .send(
        supportedCitiesResponse("Please provide a valid number for city code"),
      );
  }

  cityQueryParam = Number(cityQueryParam);

  if (!(cityQueryParam in Object.values(CITY_CODES))) {
    return res
      .status(400)
      .send(
        supportedCitiesResponse(
          `City code ${cityQueryParam} not supported, please provide a supported numeric city code`,
        ),
      );
  }

  return res.status(200);

  // Further processing for the valid city code
});

export default router;
