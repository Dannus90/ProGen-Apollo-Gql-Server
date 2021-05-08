export interface CreateUpdateDeleteLanguageResponse {
  languageId: string;
}

export interface CreateUpdateDeleteLanguageAnswer extends CreateUpdateDeleteLanguageResponse {
  statusCode: number;
}

export interface LanguageAnswer {
  languageDto: {
    id: string;
    userId: string;
    languageSv: string;
    languageEn: string;
  };
  statusCode: number;
}

export interface LanguagesAnswer {
  languageDtos: Array<{
    id: string;
    userId: string;
    languageSv: string;
    languageEn: string;
  }>;
  statusCode: number;
}
