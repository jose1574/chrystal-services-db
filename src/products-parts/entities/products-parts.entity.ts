import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products_parts')
export class ProductPartsEntity {
  @Column()
  main_code: string;

  @Column()
  part_code: string;

  @Column()
  unit: number;

  @Column()
  amount: number;

  @PrimaryColumn()
  line: number;

  @Column()
  cost_type: string;
}
