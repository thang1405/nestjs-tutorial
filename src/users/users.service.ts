import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import { StoreService } from 'src/store/store.service';
import { SecurityService } from './security.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject('STORE_SERVICEuser.json') private storeService: StoreService,
    @Inject(forwardRef(() => SecurityService))
    private securityService: SecurityService,
  ) {}
  createUser(user: UserDto): UserDto {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    this.storeService.save(UserDto.plainToClass(user));
    return UserDto.plainToClass(user);
  }
}
