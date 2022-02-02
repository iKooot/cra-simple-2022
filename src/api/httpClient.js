const baseUrl = "https://61f5558a62f1e300173c40f3.mockapi.io";

let controller = new AbortController();
let signal = controller.signal;

export async function configureHttpRequest(method, url, payload) {
  try {
    if (method === "GET") {
      const resp = await fetch(baseUrl + url, {
        method,
        signal,
      });

      if (!resp.ok) throw new Error("Bad response form the server");

      const data = await resp.json();

      return data;
    }

    if (method === "POST") {
      const resp = await fetch(baseUrl + url, {
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
