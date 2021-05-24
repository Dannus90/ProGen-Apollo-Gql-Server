export interface GetSingleCertificateResponse {
  certificateDto: CertificateDto;
  statusCode: number;
}

export interface CertificatesResponse {
  certificatesDto: Array<CertificateDto>;
  statusCode: number;
}

type CertificateDto = {
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
