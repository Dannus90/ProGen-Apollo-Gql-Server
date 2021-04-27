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
    const response = await getWorkExperience(authorization, ids[0]);

    if (response.status === 401) {
      const { status, statusText } = response;
      throw new HttpResponseError(statusText, status, statusText);
    } else if (!statusCodeChecker(response.status)) {
      const { type, statusCode, message } = await response.json();
      throw new HttpResponseError(type, statusCode, message);
    }

    const data = await response.json();

    return ids.map((id) => {
      data.workExperienceDto.statusCode = response.status
      return {
        workExperience: data.workExperienceDto
      }
    });
  });

  return {
    byWorkExperienceId
  };
};
