import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  id?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: string;
}
