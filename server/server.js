import express from "express";
import envVariables from "#constant/envs.constant";
import apiRoutes from "#constant/routes.constant";
import databaseConnection from "#config/database/database.config";
import setupErrorMiddleware from "#middleware/error/error.middleware";
import setupBasicMiddleware from "#middleware/basic/basic.middleware";
import setupRoutesMiddleware from "#middleware/api_routes/routes.middleware";
import setupStaticContent from "#middleware/static_content/staticContent.middleware";

const { backendPort } = envVariables;

const app = express();
setupBasicMiddleware(app);
setupRoutesMiddleware(app);
setupStaticContent(app); 
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
