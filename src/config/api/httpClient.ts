import fetch from "node-fetch";

type HttpMethods = "POST" | "PUT" | "DELETE" | "PATCH";

// HEADER OPTIONS
const headerOptionsNoAuth = {
  headers: {
    "content-type": "application/json",
  },
}

const headerOptionsAuth = (authorization: string) => {
  return {
    authorization,
    "content-type": "application/json",
  }
}

// API CALLS
export const fetchPostNoAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "POST",
  body: TPayload
) => {
  console.log(body)
  const response = await fetch(url, {
    method,
    ...headerOptionsNoAuth,
    body: JSON.stringify(body),
  });

  return response;
};

export const fetchPostAuth = async <TPayload, TResponse>(
  url: string,
  method: HttpMethods = "POST",
  authorization: string,
  body: TPayload
): Promise<TResponse> => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization),
    body: JSON.stringify(body),
  });

  return response.json();
};