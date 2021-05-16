export interface UserInformationResponse {
  fullUserInformationDto: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
    userData: {
      id: string;
      userId: string;
      phoneNumber?: string;
      emailCv?: string;
      citySv?: string;
      cityEn?: string;
      countrySv?: string;
      countryEn?: string;
      addressZipCode?: string;
      profileImage?: string;
      profileImagePublicId?: string;
      workTitle?: string;
      updatedAt: Date;
      createdAt: Date;
    };
    statusCode: number;
  };
}

export interface UserDataForUpdate {
  phoneNumber?: string;
  emailCv?: string;
  cityCv?: string;
  cityEn?: string;
  countrySv?: string;
  countryEn?: string;
  workTitle?: string;
  profileImage?: string;
}

export interface UserDataUpdateResponse {
  userDataDto: {
    id: string;
    userId: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailCv?: string;
    cityCv?: string;
    cityEn?: string;
    countrySv?: string;
    countryEn?: string;
    profileImage?: string;
    profileImagePublicId?: string;
    workTitle?: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
