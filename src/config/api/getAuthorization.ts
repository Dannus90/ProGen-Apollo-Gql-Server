import * as e from "express";

export const getAuthorization = (req: e.Request<any, any, any, any>): string =>
  req.headers.authorization ?? "";
