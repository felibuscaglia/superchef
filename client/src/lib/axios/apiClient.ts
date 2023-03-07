import axios from "axios";

const API_CLIENT = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_URL_TOKEN,
  },
});

export { API_CLIENT };
