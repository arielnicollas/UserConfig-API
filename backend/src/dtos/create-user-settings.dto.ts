import { IsEnum, IsBoolean, IsInt } from 'class-validator';

export class CreateUserSettingsDto {
  @IsEnum(['dark', 'medium', 'light'])
  tema: 'dark' | 'medium' | 'light';

  @IsBoolean()
  notificacoesPorEmail: boolean;

  @IsInt()
  userId: number;
}
