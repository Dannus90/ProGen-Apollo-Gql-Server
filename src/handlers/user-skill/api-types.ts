export interface GetUserSkillResponse {
  skillDto: UserSkillDto;
  statusCode: number;
}

export interface UserSkillsResponse {
  userSkillAndSkillDtos: Array<UserSkillDto>;
  statusCode: number;
}

type UserSkillDto = {
  skillModel: SkillModel
  userSkillModel: UserSkillModel;
};

type SkillModel = {
  id: string;
  skillName: string;
}

type UserSkillModel = {
  id: string;
  userId: string;
  skillId: string;
  skillLevel: number;
}
