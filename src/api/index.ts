import axios from "axios";

const unsplashAPI = axios.create({
  baseURL: import.meta.env.VITE_UNSPLASH_API_URL,
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_CLIENT_ID}`,
  },
});

export default unsplashAPI;
