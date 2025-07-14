import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserSettings } from '../user-settings/user-settings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => UserSettings, (settings) => settings.user, { cascade: true })
  settings: UserSettings;
}
