/**
 * Custom http-response-error.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

export class HttpResponseError extends Error {
  __proto__ = Error

  public type: string
  public statusCode: number

  constructor(type: string, statusCode: number, message: string) {
      super(message);
      this.type = type;
      this.statusCode = statusCode;

      Object.setPrototypeOf(this, HttpResponseError.prototype);
  }
}
