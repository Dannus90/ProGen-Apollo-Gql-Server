export interface UserInformationResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
  },
  userData: {
    id: string;
    userId: string;
    phoneNumber?: string;
    emailCv?: string;
    citySv?: string;
    cityEn?: string;
    countrySv?: string;
    countryEn?: string;
    profileImage?: string;
    updatedAt: Date;
    createdAt: Date;
  }
}
