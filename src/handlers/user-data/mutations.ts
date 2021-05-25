import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { UserDataMutationRootToUpdateUserDataResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";
import { parseJson } from "../../config/api/helpers/parse-helper";

export interface UserDataMutations {
  UserDataMutationRoot: {
    updateUserData: UserDataMutationRootToUpdateUserDataResolver;
  };
}

export const userDataMutations: UserDataMutations = {
  UserDataMutationRoot: {
    updateUserData: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateUserData(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const res = await parseJson(response);

        if (res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(
            response.type,
            response.status,
            response.message ?? response.statusText ?? "Unspecified Error"
          );
        }
      }

      const userData = await response.json();

      const {
        id,
        userId,
        emailCv,
        phoneNumber,
        firstName,
        lastName,
        citySv,
        cityEn,
        countrySv,
        countryEn,
        addressZipCode,
        profileImage,
        profileImagePublicId,
        workTitleSv,
        workTitleEn,
        createdAt,
        updatedAt
      } = userData.userDataDto;

      const gqlResponse = {
        id,
        userId,
        firstName,
        lastName,
        phoneNumber,
        emailCv,
        citySv,
        cityEn,
        countrySv,
        countryEn,
        addressZipCode,
        profileImage,
        profileImagePublicId,
        workTitleSv,
        workTitleEn,
        createdAt,
        updatedAt,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
