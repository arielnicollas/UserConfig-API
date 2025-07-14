import { Module } from '@nestjs/common';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingsService } from './user-settings.service';
import { User } from '../users/user.entity';
import { UserSettings } from './user-settings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSettings, User])],
  controllers: [UserSettingsController],
  providers: [UserSettingsService]
})
export class UserSettingsModule {}
