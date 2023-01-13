import axios from 'axios';
import interceptors from './interceptors';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_OMDB_KEY,
    plot: 'full',
  },
});

interceptors(axiosInstance);

export default axiosInstance;
