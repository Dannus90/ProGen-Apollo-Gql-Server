import { Response } from "node-fetch";

export interface ErrorResponse {
  statusCode: number;
  message: string;
  type: string;
}

export const parseJson = (response: Response): Promise<ErrorResponse | undefined> => {
  return response.text().then((res) => {
    return res ? JSON.parse(res) : undefined;
  });
};
