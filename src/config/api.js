import axios from "axios";

const api = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/",
  headers: {
    "X-Api-Key": process.env.REACT_APP_API_KEY,
  },
});

export default api;
