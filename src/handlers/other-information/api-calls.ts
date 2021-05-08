import { PROGEN_BASE_URL } from "../../config/api/base";
import { fetchGetAuth } from "../../config/api/httpClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOtherInformation = async (authorization: string): Promise<any> => {
  return await fetchGetAuth(`${PROGEN_BASE_URL}/user/otherinformation`, "GET", authorization);
};
