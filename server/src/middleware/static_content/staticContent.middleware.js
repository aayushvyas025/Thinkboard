import path from "path";
import express from "express";
import envVariables from "#constant/envs.constant";

const { nodeEnvironment } = envVariables;
const __dirname = path.resolve();

function setupStaticContent(app) {
  // serve static frontend from server
  if (nodeEnvironment === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (request, response) => {
      response.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }
}

export default setupStaticContent