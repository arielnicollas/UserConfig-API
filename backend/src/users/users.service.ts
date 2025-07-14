import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  
  async create(dto: CreateUserDto) {
    try {
      const user = this.repo.create(dto);
      return await this.repo.save(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('E-mail já cadastrado');
      }
      throw error;
    }
  }

  findAll() {
    return this.repo.find({ relations: ['settings'] });
  }
}
