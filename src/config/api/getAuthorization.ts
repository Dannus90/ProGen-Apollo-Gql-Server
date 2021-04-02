import * as e from "express";

export const getAuthorization = (req: e.Request): string => req.headers.authorization ?? "";
