import { GQLRegisterLoginInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "../../config/api/base"
import { fetchPostNoAuth } from "../../config/api/httpClient"

interface RegisterResult {
  accessToken: string;
  refreshToken: string;
}

export const registerUser = async(input: GQLRegisterLoginInput): Promise<RegisterResult | string[]> => {
  const payload = {
    email: input.email,
    password: input.password
  }
  
  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/register`, "POST", payload)
}