import axios from "axios";

const server = axios.create({
  baseURL: process.env.REACT_BASE_URL,
});

export default server;