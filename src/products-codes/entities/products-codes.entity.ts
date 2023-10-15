import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('products_codes')
export class ProductCodeEntity {
  
  @Column()
  main_code: string;

  @PrimaryColumn('character varying', { nullable: false })
  other_code: string;

  @Column('character varying', { default: 'C' })
  code_type: string;
}
