import express from "express";
import cors from "cors";
import path from "path";
import envVariables from "#constant/envs.constant";
import apiRoutes from "#constant/routes.constant";
import setupErrorMiddleware from "#middleware/error/error.middleware";
import databaseConnection from "#config/database/database.config";
import rateLimiter from "#middleware/rate_limiting/rateLimiting.middleware";
import setupBasicMiddleware from "#middleware/basic/basic.middleware";
import setupRoutesMiddleware from "#middleware/api_routes/routes.middleware";

const { backendPort } = envVariables;

const app = express();
const __dirname = path.resolve();

setupBasicMiddleware(app, rateLimiter);
setupRoutesMiddleware(app);
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
