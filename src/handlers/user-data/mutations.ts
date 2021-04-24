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
        throw new HttpResponseError(type, statusCode, message);
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
        profileImage,
        profileImagePublicId,
        createdAt,
        updatedAt
      } = userData.userDataDto;

      const gqlResponse = {
        id: id,
        userId: userId,
        firstName,
        lastName,
        phoneNumber: phoneNumber,
        emailCv: emailCv,
        citySv: citySv,
        cityEn: cityEn,
        countrySv: countrySv,
        countryEn: countryEn,
        profileImage: profileImage,
        profileImagePublicId: profileImagePublicId,
        createdAt: createdAt,
        updatedAt: updatedAt,
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
