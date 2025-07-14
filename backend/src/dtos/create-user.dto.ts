  import { IsInt, IsEmail, Min, IsString } from 'class-validator';

  export class CreateUserDto {
    @IsString()
    nome: string;

    @IsInt()
    @Min(18, { message: 'Usuário deve ter no mínimo 18 anos' })
    idade: number;

    @IsEmail()
    email: string;
  }
