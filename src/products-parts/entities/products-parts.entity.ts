import { ProductsUnitsEntity } from 'src/products-units/entities/products-units.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products_parts')
export class ProductPartsEntity {
  @PrimaryGeneratedColumn()
  line: string;

  @ManyToOne(() => ProductEntity, product => product.code, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'main_code', referencedColumnName: 'code' })
  @Column()
  main_code: ProductEntity;

  @ManyToOne(() => ProductEntity,product=> product.code, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'part_code', referencedColumnName: 'code' })
  @Column()
  part_code: ProductEntity;

  @ManyToOne(() => ProductsUnitsEntity, productUnit => productUnit.correlative)
  @JoinColumn({
    name: 'unit',
    referencedColumnName: 'correlative',
  })
  @Column()
  unit: ProductsUnitsEntity;

  @Column()
  amount: number;

  @Column()
  cost_type: string;
}

/*
-- Table: products_parts

-- DROP TABLE products_parts;

CREATE TABLE products_parts
(
  main_code character varying,
  part_code character varying,
  unit integer,
  amount double precision,
  line serial NOT NULL,
  cost_type character varying DEFAULT 'U'::character varying,


  CONSTRAINT products_parts_pkey PRIMARY KEY (line ),


  listo
  CONSTRAINT products_parts_main_code_fkey FOREIGN KEY (main_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,

LISTO
  CONSTRAINT products_parts_part_code_fkey FOREIGN KEY (part_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,


  CONSTRAINT products_parts_unit_fkey FOREIGN KEY (unit)
      REFERENCES products_units (correlative) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_parts
  OWNER TO postgres;


*/
