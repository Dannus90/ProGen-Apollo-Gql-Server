import fetch, { Response } from "node-fetch";
import { HttpResponseError, statusCodeChecker } from "./error-management/http-response-error";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

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
  authorization: string
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchDeleteAuth = async (
  url: string,
  method: HttpMethods = "DELETE",
  authorization: string
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization)
  });

  return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchGetAuth = async (
  url: string,
  method: HttpMethods = "GET",
  authorization: string
) => {
  const response = await fetch(url, {
    method,
    ...headerOptionsAuth(authorization)
  });

  return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPutAuth = async <TPayload>(
  url: string,
  method: HttpMethods = "PUT",
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
