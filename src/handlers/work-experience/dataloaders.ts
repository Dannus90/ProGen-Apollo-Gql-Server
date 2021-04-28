import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { getWorkExperience } from "./api-calls";
import { GetWorkExperienceAnswer } from "./api-types";

export interface WorkExperienceDataLoaders {
  byWorkExperienceId: DataLoader<string, GetWorkExperienceAnswer>;
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
          const { type, statusCode, message } = await response.json();
          throw new HttpResponseError(type, statusCode, message);
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

  return {
    byWorkExperienceId
  };
};
