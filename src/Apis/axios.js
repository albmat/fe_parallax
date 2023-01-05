import axios from "axios";

const BASE_URL = "https://frontend-trial-api.qa.parallax.dev/api/newsletter";

export const getUrl = () => {
  const Axios = axios.create({
    baseURL: BASE_URL,
  });
  Axios.defaults.headers.common["Content-type"] = "application/json";

  return Axios;
};
