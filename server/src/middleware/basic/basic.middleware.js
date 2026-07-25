import express from "express";
import cors from "cors";
import path from "path";
import envVariables from "#constant/envs.constant";
import rateLimiter from "#middleware/rate_limiting/rateLimiting.middleware";

const { frontendDomain, nodeEnvironment } = envVariables;
const __dirname = path.resolve();

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
  // serve static frontend from server
  if (nodeEnvironment === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (request, response) => {
      response.sendFile(
        path.join(__dirname, "../client", "dist", "index.html"),
      );
    });
  }
}

export default setupBasicMiddleware;
