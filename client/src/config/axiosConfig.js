import axios from "axios";
import envVariables from "../constant/envVariables";

const { backendUrl, applicationMode } = envVariables;

const API = axios.create({
  baseURL: applicationMode === "development" ? backendUrl : "/api/v1",
});

export default API;
