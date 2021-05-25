import { Response } from "node-fetch";

export class HttpResponseError extends Error {
  __proto__ = Error;

  public type: string;
  public statusCode: number;

  constructor(type: string, statusCode: number, message: string) {
    super(message);
    this.type = type;
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, HttpResponseError.prototype);
  }
}

export const statusCodeChecker = (statusCode: number) => {
  return statusCode >= 200 && statusCode <= 250;
};

export interface GeneralResponse extends Response {
  message: string;
}
