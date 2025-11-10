import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': 'Basic ZGllZ29fc2FudG9zOnEySyhRTzdpOA=='
  }
})

export default api