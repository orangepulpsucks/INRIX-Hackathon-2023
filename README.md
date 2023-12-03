![gitlogo](https://github.com/orangepulpsucks/INRIX-Hackathon-2023/assets/42681894/9a657e72-26dd-4117-9fcf-54d5fe30c6e7)
# Wanderus
Brought to you by the BitBats is Wanderus. Let us craft your perfect day by analyzing what's around you. Embrace spontaneity, discover local gems, and make the most out of every moment with Wanderus!

This is our official submission for the INRIX Hackathon 2023.

# React-Express Boilerplate

## Description

This repository serves as a boilerplate for a full-stack web application using React for the client-side and Express for the server-side, both written in TypeScript.

## Project Structure

- `/api`: Contains the source code for the Express API.
- `/webapp`: Contains the client-side React application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (`^20.10.0`) installed on your machine.
- [Hygen](https://www.hygen.io/docs/quick-start), a code generator for the api

### Installation Steps

> Be sure to go into `/api` and `/webapp` folders for more instruction and context

1. Clone this repository.
2. Navigate to the root directory of the project.
3. Install dependencies for the API:
   ```bash
   cd api
   npm i
   ```
4. Install dependencies for the React app:
   ```bash
   cd ../webapp
   npm i
   ```

### Setting Environment Variables

For configuring environment variables, follow these steps:

1. Locate the `.template.env` in the root directory
2. Make a copy of `.template.env` and rename it to `.env`.
3. Fill in the necessary environment variables in the newly created `.env` files for both the API and React app.

## Important Scripts

> This must be ran within their respective folders, so be sure to change directory!

- `/api`:

  - `npm run dev`: Starts the Express API server using Nodemon.
  - `npm run build`: Transpiles TypeScript code to JavaScript.
  - `npm run serve`: Serves the application using Node from the `dist` directory.

- `/webapp`:
  - `npm run dev`: Starts the React app's development server.
  - `npm run build`: Builds the production-ready app.
