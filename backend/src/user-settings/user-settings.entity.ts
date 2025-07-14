import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class UserSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['dark', 'medium', 'light'] })
  tema: 'dark' | 'medium' | 'light';

  @Column()
  notificacoesPorEmail: boolean;

  @OneToOne(() => User, (user) => user.settings)
  @JoinColumn()
  user: User;
}
