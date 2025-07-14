import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSettings } from './user-settings.entity';
import { CreateUserSettingsDto } from '../dtos/create-user-settings.dto';
import { User } from '../users/user.entity';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSettings) private repo: Repository<UserSettings>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserSettingsDto) {
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) throw new NotFoundException('Usuário não encontrado');

    const settings = this.repo.create({
      tema: dto.tema,
      notificacoesPorEmail: dto.notificacoesPorEmail,
      user,
    });

    return this.repo.save(settings);
  }
}
