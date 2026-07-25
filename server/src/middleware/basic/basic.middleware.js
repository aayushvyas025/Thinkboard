import express from "express";
import cors from "cors";
import envVariables from "#constant/envs.constant";
import rateLimiter from "#middleware/rate-limiting/rateLimiting.middleware";

const { frontendDomain, nodeEnvironment } = envVariables;

function setupBasicMiddleware(app) {
  //  app-universal josn parser
  app.use(express.json());
  // cors connection
  if (nodeEnvironment !== "production") {
    app.use(
      cors({
        origin: frontendDomain,
      }),
    );
  }
  // rate limiter
  app.use(rateLimiter);
 
}

export default setupBasicMiddleware;
