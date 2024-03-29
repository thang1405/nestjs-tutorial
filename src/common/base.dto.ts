import { Expose } from 'class-transformer';

export class BaseDto {
  @Expose()
  id: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;
}
