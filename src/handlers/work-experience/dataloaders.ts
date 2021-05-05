import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getWorkExperience, getWorkExperiences } from "./api-calls";
import { GetWorkExperienceAnswer, GetWorkExperiencesAnswer } from "./api-types";

export interface WorkExperienceDataLoaders {
  byWorkExperienceId: DataLoader<string, GetWorkExperienceAnswer>;
  workExperiencesByUserIdInClaims: DataLoader<string, GetWorkExperiencesAnswer>;
}

export const createWorkExperienceDataLoaders = (
  authorization: string
): WorkExperienceDataLoaders => {
  const byWorkExperienceId = new DataLoader<string, GetWorkExperienceAnswer>(async (ids) => {
    const workExperiences = await Promise.all(
      ids.map(async (id) => {
        const response = await getWorkExperience(authorization, id);
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

        const workExperience = await response.json();
        workExperience.workExperienceDto.statusCode = response.status;
        return workExperience;
      })
    );

    return ids.map((id) => {
      return workExperiences.find((we) => we.workExperienceDto.id === id);
    });
  });

  const workExperiencesByUserIdInClaims = new DataLoader<"All", GetWorkExperiencesAnswer>(
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
            });

            throw new HttpResponseError(
              type,
              statusCode ?? response.status,
              message ?? errorOutput
            );
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
  );

  return {
    byWorkExperienceId,
    workExperiencesByUserIdInClaims
  };
};
