import { fetchGetAuth } from './../../config/api/httpClient';
import { PROGEN_BASE_URL } from './../../config/api/base';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFullCvInformation = async (
  authorization: string
): Promise<any> => {
  return await fetchGetAuth(
    `${PROGEN_BASE_URL}/user/fullcvinformation`,
    "GET",
    authorization
  );
};