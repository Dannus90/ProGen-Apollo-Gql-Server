/**
 * Authentication resolvers.
 *
 * @author Daniel Persson
 * @version 1.0.0
 */

import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { UserDataMutationRootToUpdateUserDataResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";

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
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
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
        zipCode,
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
        zipCode,
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
