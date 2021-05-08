import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { OtherInformationMutationRootToUpdateOtherInformationResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";

export interface OtherInformationMutations {
  OtherInformationMutationRoot: {
    updateOtherInformation: OtherInformationMutationRootToUpdateOtherInformationResolver;
  };
}

export const otherInformationMutations: OtherInformationMutations = {
  OtherInformationMutationRoot: {
    updateOtherInformation: async (_, body, { api, authorization }: Context) => {
      const response = await api.updateOtherInformation(authorization, body.input);

      if (!statusCodeChecker(response.status)) {
        const { type, statusCode, message } = await response.json();
        throw new HttpResponseError(type, statusCode ?? response.status, message);
      }

      const data = await response.json();

      const {
        id,
        userId,
        drivingLicenseSv,
        drivingLicenseEn,
        createdAt,
        updatedAt
      } = data.otherInformationDto;

      const gqlResponse = {
        otherInformation: {
          id: id,
          userId: userId,
          drivingLicenseSv,
          drivingLicenseEn,
          createdAt: createdAt,
          updatedAt: updatedAt
        },
        statusCode: response.status
      };

      return gqlResponse;
    }
  }
};
