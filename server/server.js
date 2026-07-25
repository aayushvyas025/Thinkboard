import express from "express";
import cors from "cors";
import path from "path";
import envVariables from "#constant/envs.constant";
import apiRoutes from "#constant/routes.constant";
import notesRoutes from "#routes/notes/notes.route";
import setupErrorMiddleware from "#middleware/error/error.middleware";
import databaseConnection from "#config/database/database.config";
import rateLimiter from "#middleware/rate-limiting/rateLimiting.middleware";
import setupBasicMiddleware from "#middleware/basic/basic.middleware";

const { backendPort, frontendDomain } = envVariables;
const { BASE } = apiRoutes;

const app = express();
const __dirname = path.resolve();

setupBasicMiddleware(app, rateLimiter);

app.use(BASE, notesRoutes);
app.use(express.static(path.join(__dirname, "../client/dist")));

setupErrorMiddleware(app);

databaseConnection()
  .then(() => {
    app.listen(backendPort, () => {
      console.log(`Your server is running on http://localhost:${backendPort}`);
    });
  })
  .catch((error) => {
    console.error(`Error while connecting to the database: ${error.message}`);
  });
