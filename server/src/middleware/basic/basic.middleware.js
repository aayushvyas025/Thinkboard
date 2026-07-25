import express from "express";
import cors from "cors";
import envVariables from "#constant/envs.constant";

const { frontendDomain } = envVariables;

function setupBasicMiddleware(app, rateLimiter) {
//  app-universal josn parser 
  app.use(express.json());
// cors connection
  app.use(
    cors({
      origin: frontendDomain,
    }),
  );
  // rate limiter
  app.use(rateLimiter);
}

export default setupBasicMiddleware; 