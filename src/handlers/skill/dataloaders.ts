import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getSkills } from "./api-calls";
import { SkillsResponse } from "./api-types";
export interface SkillDataLoaders {
  skillsByUserIdInClaims: DataLoader<string, SkillsResponse>;
}

export const createSkillsDataLoaders = (authorization: string): SkillDataLoaders => {
  const skillsByUserIdInClaims = new DataLoader<"All", SkillsResponse>(async (ids) => {
    const skills = await Promise.all(
      ids.map(async () => {
        const response = await getSkills(authorization);
        if (!statusCodeChecker(response.status)) {
          const res = await parseJson(response);

          if (res) {
            throw new HttpResponseError(res.type, res.statusCode ?? response.status, res.message);
          } else {
            throw new HttpResponseError(
              response.type,
              response.status,
              response.message ?? response.statusText ?? "Unspecified Error"
            );
          }
        }

        const skillsResponse = await response.json();
        skillsResponse.statusCode = response.status;
        return skillsResponse;
      })
    );

    return ids.map(() => {
      return skills[0];
    });
  });

  return {
    skillsByUserIdInClaims
  };
};
