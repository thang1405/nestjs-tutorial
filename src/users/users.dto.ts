import { Expose, Transform } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';

export class UserDto extends BaseDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + obj.lastName)
  fullName: string;

  @Expose()
  age: number;
}
