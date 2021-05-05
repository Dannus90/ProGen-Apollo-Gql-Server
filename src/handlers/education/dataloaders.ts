import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getEducation, getEducations } from "./api-calls";
import { EducationResponse, EducationsResponse } from "./api-types";

export interface EducationDataLoaders {
  byEducationId: DataLoader<string, EducationResponse>;
  educationsByUserIdInClaims: DataLoader<string, EducationsResponse>;
}

export const createEducationDataLoaders = (authorization: string): EducationDataLoaders => {
  const byEducationId = new DataLoader<string, EducationResponse>(async (ids) => {
    const educations = await Promise.all(
      ids.map(async (id) => {
        const response = await getEducation(authorization, id);
        if (response.status === 401) {
          const { status, statusText } = response;
          throw new HttpResponseError(statusText, status, statusText);
        } else if (!statusCodeChecker(response.status)) {
          const { type, statusCode, message, errors } = await response.json();

          const errorOutput = Object.keys(errors).map((err) => {
            return errors[err];
          });

          throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
        }

        const education = await response.json();
        education.statusCode = response.status;
        return education;
      })
    );

    return ids.map((id) => {
      return educations.find((we) => we.educationDto.id === id);
    });
  });

  const educationsByUserIdInClaims = new DataLoader<"All", EducationsResponse>(async (ids) => {
    const educations = await Promise.all(
      ids.map(async () => {
        const response = await getEducations(authorization);
        if (response.status === 401) {
          const { status, statusText } = response;
          throw new HttpResponseError(statusText, status, statusText);
        } else if (!statusCodeChecker(response.status)) {
          const { type, statusCode, message, errors } = await response.json();

          const errorOutput = Object.keys(errors).map((err) => {
            return errors[err];
          });

          throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
        }

        const educationsResponse = await response.json();
        educationsResponse.statusCode = response.status;
        return educationsResponse;
      })
    );

    return ids.map(() => {
      return educations[0];
    });
  });

  return {
    byEducationId,
    educationsByUserIdInClaims
  };
};
