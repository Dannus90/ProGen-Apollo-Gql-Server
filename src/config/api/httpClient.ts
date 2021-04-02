import fetch from "node-fetch";

type HttpMethods = "POST" | "PUT" | "DELETE" | "PATCH";

// HEADER OPTIONS
const headerOptionsNoAuth = {
  headers: {
    "content-type": "application/json"
  }
};

const headerOptionsAuth = (authorization: string) => {
  return {
    headers: {
      authorization,
      "content-type": "application/json"
    }
  };
};

// API CALLS
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPostNoAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "POST",
  body: TPayload
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsNoAuth,
    body: JSON.stringify(body)
  });

  return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPostNoBody = async (
  url: string,
  method: HttpMethods = "POST",
  authorization: string,
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization)
  });

  return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPostAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "POST",
  authorization: string,
  body: TPayload
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization),
    body: JSON.stringify(body)
  });

  return response;
};
