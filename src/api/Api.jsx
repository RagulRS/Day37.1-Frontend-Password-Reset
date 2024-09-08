import axios from "axios";

const instance = axios.create({ 
  // baseURL:  "http://localhost:3001"
  baseURL:  "https://day37-0-backend-password-reset.onrender.com"
});

export default instance;