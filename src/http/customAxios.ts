import axios from "axios";

type DATA = any;
type URI = string;
type METHOD = "GET" | "POST" | "PUT" | "DELETE";
const proxyUrl = "http://localhost:8000";
export const customAxios = async (uri: URI, method: METHOD, data?: DATA) => {
  const token = localStorage.getItem("token") || "";
  const res = await axios({
    url: proxyUrl + uri,
    method,
    data,
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};
