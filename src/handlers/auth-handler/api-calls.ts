import { GQLRegisterLoginInput } from "../../types/TypesGraphQL";
import { PROGEN_BASE_URL } from "../../config/api/base"
import { fetchPostNoAuth } from "../../config/api/httpClient"

export const registerUser = async(input: GQLRegisterLoginInput): Promise<any> => {
  const payload = {
    email: input.email,
    password: input.password
  }
  return await fetchPostNoAuth(`${PROGEN_BASE_URL}/user/auth/register`, "POST", payload)
}