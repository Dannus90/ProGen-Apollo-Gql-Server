import { HttpResponseError } from "../../config/api/error-management/http-response-error";
import { GQLGetFullCvInformationResponse } from "../../types/TypesGraphQL";
import { Context } from "./../../context";

export interface FullCvInformationGqlResponse extends GQLGetFullCvInformationResponse {
  statusCode: number;
}

export const fullCvInformationResolversResolvers = {
  FullCvInformationRoot: {
    getFullCvInformation: async (
      _,
      __,
      { loaders }: Context
    ): Promise<FullCvInformationGqlResponse | null> => {
      const fullCvInformationResponse = await loaders.fullCvInformation.byUserIdInClaims.load(
        "UserIdInClaims"
      );

      if (!fullCvInformationResponse)
        throw new HttpResponseError(
          "Bad request",
          400,
          "No cv information connected to the user could be found."
        );

      const {
        educationDtos,
        fullUserInformationDto,
        languageDtos,
        statusCode,
        otherInformationDto,
        userPresentationDto,
        workExperienceDtos
      } = fullCvInformationResponse;

      return {
        fullUserInformation: {
          id: fullUserInformationDto.user.id,
          profileImage: fullUserInformationDto.userData.profileImage ?? "",
          cityEn: fullUserInformationDto.userData.cityEn ?? "",
          citySv: fullUserInformationDto.userData.citySv ?? "",
          countryEn: fullUserInformationDto.userData.countryEn ?? "",
          countrySv: fullUserInformationDto.userData.countrySv ?? "",
          emailCv: fullUserInformationDto.userData.emailCv ?? "",
          firstName: fullUserInformationDto.user.firstName,
          lastName: fullUserInformationDto.user.lastName,
          workTitleSv: fullUserInformationDto.userData.workTitleSv ?? "",
          workTitleEn: fullUserInformationDto.userData.workTitleEn ?? "",
          phoneNumber: fullUserInformationDto.userData.phoneNumber ?? ""
        },
        otherInformation: otherInformationDto,
        educations: educationDtos.map((ed) => {
          return {
            cityEn: ed?.cityEn ?? "",
            citySv: ed?.citySv ?? "",
            countryEn: ed?.countryEn ?? "",
            countrySv: ed?.countrySv ?? "",
            descriptionEn: ed?.descriptionEn ?? "",
            descriptionSv: ed?.descriptionSv ?? "",
            educationNameEn: ed?.educationNameEn ?? "",
            educationNameSv: ed?.educationNameSv ?? "",
            examNameEn: ed?.examNameEn ?? "",
            examNameSv: ed?.examNameSv ?? "",
            grade: ed?.grade ?? "",
            subjectAreaEn: ed?.subjectAreaEn ?? "",
            subjectAreaSv: ed?.subjectAreaSv ?? "",
            dateEnded: ed?.dateEnded,
            dateStarted: ed?.dateStarted
          };
        }),
        userPresentation: userPresentationDto,
        languages: languageDtos.map((ld) => {
          return {
            languageEn: ld?.languageEn ?? "",
            languageSv: ld?.languageSv ?? ""
          };
        }),
        workExperiences: workExperienceDtos.map((wed) => {
          return {
            cityEn: wed?.cityEn ?? "",
            citySv: wed?.citySv ?? "",
            companyName: wed?.companyName ?? "",
            countryEn: wed?.countryEn ?? "",
            countrySv: wed?.countrySv ?? "",
            descriptionEn: wed?.descriptionEn ?? "",
            descriptionSv: wed?.descriptionSv ?? "",
            employmentRate: wed?.employmentRate ?? "",
            roleEn: wed?.roleEn ?? "",
            roleSv: wed?.roleSv ?? "",
            dateEnded: wed?.dateEnded,
            dateStarted: wed?.dateStarted
          };
        }),
        statusCode
      };
    }
  }
};
