import fetch, { Response } from "node-fetch";

type HttpMethods = "POST" | "PUT" | "DELETE" | "PATCH";

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

export const fetchPostNoAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "POST",
  body: TPayload
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsNoAuth,
    body: JSON.stringify(body),
  });

  return response;
};

export const fetchPostAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "POST",
  authorization: string,
  body: TPayload
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization),
    body: JSON.stringify(body),
  });

  return response;
};