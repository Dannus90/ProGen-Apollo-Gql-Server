import { Request } from "express";

export const getAuthorization = (req: Request): string => req.headers.authorization ?? "";
