import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  id?: string;

  @IsNotEmpty({ message: 'Email can not empty' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password can not empty' })
  readonly password: string;
}
