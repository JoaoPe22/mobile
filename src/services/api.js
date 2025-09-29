import axios from 'axios';
import Config from 'react-native-config';

// Configura a instância do Axios com a URL base da API
const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
