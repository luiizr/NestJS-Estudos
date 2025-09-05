import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id: number; // Gera automaticamente

  @Column({ type: 'varchar', length: 255 })
  texto: string;

  @Column({ type: 'varchar', length: 50 })
  de: string;

  @Column({ type: 'varchar', length: 50 })
  para: string;

  @Column({ default: false })
  lido: boolean; // Não é lido ao ser enviado, então não precisamos passar na criação

  @CreateDateColumn()
  data?: Date; // É gerada automaticamente na hora da criação

  @CreateDateColumn()
  dataCriacao?: Date;

  @UpdateDateColumn()
  dataAlteracao?: Date;
}
