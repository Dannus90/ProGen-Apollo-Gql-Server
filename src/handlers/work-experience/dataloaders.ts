import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
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
        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);
  
          if(res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
          }        
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
          if (!statusCodeChecker(response.status)) {
            const res = await parseJson(response);
    
            if(res) {
              throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
            } else {
              throw new HttpResponseError(response.type, response.status, response.message ?? response.statusText ?? "Unspecified Error");
            }        
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
