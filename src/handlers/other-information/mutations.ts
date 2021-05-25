import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { OtherInformationMutationRootToUpdateOtherInformationResolver } from "./../../types/TypesGraphQL";
import { Context } from "../../context";
import { parseJson } from "../../config/api/helpers/parse-helper";

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
        const res = await parseJson(response);

        if(res) {
          throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
        } else {
          throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
        }        
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
