// utils/api.ts
import axios from "axios";

let apiInstance = axios.create({
  baseURL: "//localhost:8000", // default fallback
});

// Function to initialize with runtime API URL
export const initApi = (runtimeUrl?: string) => {
  const baseURL = runtimeUrl || "//localhost:8000";
  apiInstance = axios.create({ baseURL });
};

// Getter for Axios instance
export const api = () => apiInstance;
