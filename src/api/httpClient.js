// import axios from "axios";
// import { ClientHttpError, HttpError, RedirectHttpError, ServerHttpError, NoNetworkHttpError, UnknownError} from './errors'

const baseURL = "https://61f5558a62f1e300173c40f3.mockapi.io";

let controller = new AbortController();
let signal = controller.signal;

export async function configureHttpRequest(method, url, payload) {
  try {
    if (method === "GET") {
      const resp = await fetch(baseURL + url, {
        method,
        signal,
      });

      if (!resp.ok) throw new Error("Bad response form the server");

      const data = await resp.json();

      return data;
    }

    if (method === "POST") {
      const resp = await fetch(baseURL + url, {
        method,
        signal,
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp.ok) throw new Error("Bad response form the server");

      console.log(resp);
    }
  } catch (error) {
    throw new Error(error);
  }
}

// export function configureHttpClient() {
//   return axios.create({
//     baseURL,
//     headers: {
//       put: {
//         "Content-Type": "application/json",
//       },
//     },
//   });
// }

// function handleHttpClientError(response) {
//   if (response.status >= 300 && response.status < 400) {
//     return new RedirectHttpError(
//         response.status,
//         response.statusText,
//         response.request.responseUrl
//     );
//   }
//
//   if (response.status >= 400 && response.status < 500) {
//     return new ClientHttpError(response.status, response.request?._response || response.statusText);
//   }
//
//   return new ServerHttpError(response.status, response.statusText);
// }
//
// async function genericRequest(
//     requestType,
//     url,
//     data,
// ) {
//   try {
//     const httpClient = configureHttpClient();
//     const response = await httpClient[requestType](url, data);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       throw handleHttpClientError(error.response);
//     } else {
//       throw new UnknownError(error);
//     }
//   }
// }
