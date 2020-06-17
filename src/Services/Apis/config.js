import axios from "axios"

const API_ROOT = process.env.REACT_APP_API_URL || "http://localhost:8080/api"

const client = axios.create({
  baseURL: API_ROOT,
})

export default client
