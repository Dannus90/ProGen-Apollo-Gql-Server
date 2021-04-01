import { GQLRegisterLoginInput } from "../../types/TypesGraphQL";

interface RegisterResult {
  accessToken: string;
  refreshToken: string;
}

export const registerUser = async(input: GQLRegisterLoginInput): Promise<RegisterResult | string[]> => {
  
}