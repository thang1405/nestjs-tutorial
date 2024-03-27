import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;
  firstName: string;
  lastName: string;
  @Transform(({ obj }) => obj.firstName + obj.lastName)
  @Expose()
  fullName: string;
  @IsNotEmpty()
  @Length(10, 20)
  @Expose()
  password: string;
}
