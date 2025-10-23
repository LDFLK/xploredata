"use client";

import axios from "axios";
import {getApiBaseUrl} from './runtimeconfig'

const api = axios.create({
  baseURL: getApiBaseUrl(),
});

export default api;
