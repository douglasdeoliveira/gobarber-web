import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gobarber.douglasdeoliveira.dev',
});

export default api;
