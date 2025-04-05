import axios from "axios";
import { Base_URL } from "./common";

export const MyAxios = axios.create({ baseURL: Base_URL });

MyAxios.interceptors.request.use((req) => {
  req.headers.token = `3b8ny__${localStorage.getItem("token")}`;
  return req;
});
MyAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (res) => {
    if (res.response.data.msg == "not notes found") {
      return Promise.resolve({ data: { notes: [] } });
    }
  }
);
