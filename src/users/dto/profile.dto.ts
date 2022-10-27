import { IsPhoneNumber } from 'class-validator';
import { Users } from '../model/users.model';

export class ProfileDto {
  _id?: string;

  @IsPhoneNumber()
  mobileNumber: number;

  city: string;

  street: string;

  imageContent: string;

  users: Users;
}
