export interface UserPresentationResponse {
  userPresentationData: {
    id: string;
    userId: string;
    presentationSv: string;
    presentationEn: string;
    createdAt: Date;
    updatedAt: Date;  
  };
  statusCode: number;
}
