import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { StoreModule } from 'src/store/store.module';

@Module({
  controllers: [UsersController],
  imports: [StoreModule.forFeature({ filename: 'user.json' })],
  providers: [UsersService],
})
export class UsersModule {}
