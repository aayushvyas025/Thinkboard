import axios from "axios";
import envVariables from "../constant/envVariables";

const { backendUrl } = envVariables;

const API = axios.create({
  baseURL: backendUrl,
});

export default API;
