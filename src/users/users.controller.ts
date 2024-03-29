import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './users.dto';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.findAll(UserDto);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findOne({ where: { id } }, UserDto);
  }
  @Post()
  createUser(@Body() user: UserEntity) {
    return this.userService.create(user, UserDto);
  }
  @Put(':id')
  updateUserById(@Param('id') id: string, @Body() user: UserEntity) {
    return this.userService.update(id, { where: { id } }, user, UserDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string): Promise<any> {
    return this.userService.delete(id);
  }
}
