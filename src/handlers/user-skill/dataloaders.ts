import DataLoader from "dataloader";
import {
  HttpResponseError,
  statusCodeChecker
} from "../../config/api/error-management/http-response-error";
import { parseJson } from "../../config/api/helpers/parse-helper";
import { getUserSkill, getUserSkills } from "./api-calls";
import { GetUserSkillResponse, UserSkillsResponse } from "./api-types";
export interface UserSkillDataLoaders {
  userSkillsByUserIdInClaims: DataLoader<string, UserSkillsResponse>;
  byUserSkillId: DataLoader<string, GetUserSkillResponse>;
}

export const createUserSkillsDataLoaders = (authorization: string): UserSkillDataLoaders => {
  const userSkillsByUserIdInClaims = new DataLoader<"All", UserSkillsResponse>(async (ids) => {
    const userSkills = await Promise.all(
      ids.map(async () => {
        const response = await getUserSkills(authorization);
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

        const userSkillsResponse = await response.json();
        userSkillsResponse.statusCode = response.status;
        return userSkillsResponse;
      })
    );

    return ids.map(() => {
      return userSkills[0];
    });
  });

  const byUserSkillId = new DataLoader<string, GetUserSkillResponse>(async (ids) => {
    const userSkills = await Promise.all(
      ids.map(async (id) => {
        const response = await getUserSkill(authorization, id);
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

        const userSkill = await response.json();
        userSkill.statusCode = response.status;
        return userSkill;
      })
    );

    return ids.map((id) => {
      return userSkills.find((us) => us.userSkillAndSkillDto.userSkillModel.id === id);
    });
  });

  return {
    userSkillsByUserIdInClaims,
    byUserSkillId
  };
};
