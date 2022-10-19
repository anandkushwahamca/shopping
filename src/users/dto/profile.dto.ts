import { IsPhoneNumber } from 'class-validator';

export class ProfileDto {
  id?: string;

  @IsPhoneNumber()
  mobileNumber: number;

  address: string;

  imageContent: string;
}
