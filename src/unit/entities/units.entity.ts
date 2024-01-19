import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('units')
export class UnitsEntity {
    @PrimaryColumn({ name: 'code' })
  code: string;

  @Column({ name: 'description', nullable: true })
  description: string;
}