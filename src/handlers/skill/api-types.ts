export interface GetSkillResponse {
  skillDto: SkillDto;
  statusCode: number;
}

export interface SkillsResponse {
  skillDtos: Array<SkillDto>;
  statusCode: number;
}

type SkillDto = {
  id: string;
  skillName: string;
};
