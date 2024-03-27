import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class SecurityService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}
}
