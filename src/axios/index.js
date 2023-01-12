import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    apikey: process.env.VUE_APP_OMDB_KEY,
    plot: 'full',
  },
});

export default axiosInstance;
