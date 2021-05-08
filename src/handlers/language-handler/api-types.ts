export interface CreateUpdateDeleteLanguageResponse {
  languageId: string;
}

export interface CreateUpdateDeleteLanguageAnswer extends CreateUpdateDeleteLanguageResponse {
  statusCode: number;
}

export interface LanguageAnswer {
  id: string;
  userId: string;
  languageSv: string;
  languageEn: string;
  statusCode: number;
}