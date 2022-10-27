import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Role } from '../../common/enum/role.enum';
import { Profile } from '../model/profile.model';

export class SignUpDto {
  id?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @MaxLength(250)
  @IsEmail()
  @IsNotEmpty({ message: 'Email can not empty' })
  email: string;

  role: Role;

  profile?: Profile;
}
