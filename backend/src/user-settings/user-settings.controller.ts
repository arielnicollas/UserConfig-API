import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserSettingsDto } from '../dtos/create-user-settings.dto';
import { UserSettingsService } from './user-settings.service';

@Controller('user-settings')
export class UserSettingsController {
  constructor(private readonly service: UserSettingsService) {}

  @Post()
  create(@Body() dto: CreateUserSettingsDto) {
    return this.service.create(dto);
  }
}
