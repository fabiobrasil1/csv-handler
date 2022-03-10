import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArquivoCsv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  complemento: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  uf: string;

}
