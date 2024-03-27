import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StoreModule } from './store/store.module';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [UsersModule, StoreModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
