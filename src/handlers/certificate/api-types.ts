export interface GetSingleCertificateResponse {
  certificateDto: {
    id: string;
    userId: string;
    certificateNameSv: string;
    certificateNameEn: string;
    organisation: string;
    identificationId: string;
    referenceAddress: string;
    dateIssued: Date;
    createdAt: Date;
    updatedAt: Date;
  };
  statusCode: number;
}
