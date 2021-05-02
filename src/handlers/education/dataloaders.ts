import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getEducation } from "./api-calls";
import { EducationResponse } from "./api-types";

export interface EducationDataLoaders {
  byEducationId: DataLoader<string, EducationResponse>;
}

export const createEducationDataLoaders = (
  authorization: string
): EducationDataLoaders => {
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
          })
  
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

/*   const workExperiencesByUserIdInClaims = new DataLoader<"All", GetWorkExperiencesAnswer>(
    async (ids) => {
      const workExperiences = await Promise.all(
        ids.map(async () => {
          const response = await getWorkExperiences(authorization);
          if (response.status === 401) {
            const { status, statusText } = response;
            throw new HttpResponseError(statusText, status, statusText);
          } else if (!statusCodeChecker(response.status)) {
            const { type, statusCode, message, errors } = await response.json();

            const errorOutput = Object.keys(errors).map((err) => {
              return errors[err];
            })
    
            throw new HttpResponseError(type, statusCode ?? response.status, message ?? errorOutput);
          }

          const workExperiencesResponse = await response.json();
          workExperiencesResponse.statusCode = response.status;
          return workExperiencesResponse;
        })
      );

      return ids.map(() => {
        return workExperiences[0];
      });
    }
  ); */

  return {
    byEducationId
  };
};