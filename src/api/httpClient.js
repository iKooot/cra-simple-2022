import axios from "axios";

const controller = new AbortController();
const signal = controller.signal;

const axiosConf = () =>
  axios.create({
    baseURL: "https://61f5558a62f1e300173c40f3.mockapi.io",
    signal,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const genericRequest = async (requestType, url, data) => {
  try {
    const httpClient = axiosConf();
    const response = await httpClient[requestType](url, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response);
    } else {
      throw new Error("UnknownError");
    }
  }
};

export async function post(url, data) {
  return genericRequest("post", url, data);
}

export async function get(url, data) {
  return genericRequest("get", url, data);
}
