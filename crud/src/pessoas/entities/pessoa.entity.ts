import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ length: 50 })
  passwordHash: string;

  @Column({ length: 50 })
  name: string;

  @CreateDateColumn()
  dataCriacao?: Date;

  @UpdateDateColumn()
  dataAlteracao?: Date;
}
