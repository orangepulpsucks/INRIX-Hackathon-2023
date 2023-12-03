import express, { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const router = express.Router();

router.get("/generate", async (req: Request, res: Response) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are helping some create their itinerary, you will provide a response in html using tailwind classes of the trip. Should have day with date followed by the activity. should be using css tables and tailwind. Do not just list the descriptions the user provides, provide some more meaningful or information or description  to excite the user on their journey, and it should day you go to each place should be random but the dates should be in order.",
      },
      {
        role: "user",
        content: `Generate an itinerary, in any order.

        Fog Harbor Fish House: Pier 39 seafood institution with fresh fish & scenic views of the bay & Golden Gate Bridge.
        
        Hog Island Oyster: Contemporary waterside seafood eatery serving local oysters & clams, plus craft cocktails.
        
        Liholiho Yacht Club: Buzzy, casual eatery in a brick-walled space with booths.
        
        House of Prime Rib: Old-school, English-style restaurant serving acclaimed prime rib & martinis since the 1940s
        
        Kokkari Estiatorio: Taverna-inspired cuisine served in a candlelit, wood-beamed dining room that lures a chic crowd.
        
        From December 6th to 10th in San Francisco`,
      },
      {
        role: "system",
        content: `<table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Day</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Day 1</td>
            <td class="border px-4 py-2">December 6th</td>
            <td class="border px-4 py-2">Fog Harbor Fish House: Pier 39 seafood institution with fresh fish &amp; scenic views of the bay &amp; Golden Gate Bridge.</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Day 2</td>
            <td class="border px-4 py-2">December 7th</td>
            <td class="border px-4 py-2">Hog Island Oyster: Contemporary waterside seafood eatery serving local oysters &amp; clams, plus craft cocktails.</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Day 3</td>
            <td class="border px-4 py-2">December 8th</td>
            <td class="border px-4 py-2">Liholiho Yacht Club: Buzzy, casual eatery in a brick-walled space with booths.</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Day 4</td>
            <td class="border px-4 py-2">December 9th</td>
            <td class="border px-4 py-2">House of Prime Rib: Old-school, English-style restaurant serving acclaimed prime rib &amp; martinis since the 1940s.</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Day 5</td>
            <td class="border px-4 py-2">December 10th</td>
            <td class="border px-4 py-2">Kokkari Estiatorio: Taverna-inspired cuisine served in a candlelit, wood-beamed dining room that lures a chic crowd.</td>
          </tr>
        </tbody>
      </table>`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return res
    .status(200)
    .send({ message: chatCompletion.choices[0].message.content });
});

export default router;
