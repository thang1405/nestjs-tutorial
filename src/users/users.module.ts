import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StoreModule } from 'src/store/store.module';
import { LoggerService } from 'src/logger/logger.service';
import { SecurityService } from './security.service';

@Module({
  controllers: [UsersController],
  imports: [StoreModule.forFeature({ filename: 'user.json' })],
  providers: [UsersService, LoggerService, SecurityService],
})
export class UsersModule {}
