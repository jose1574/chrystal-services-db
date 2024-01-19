import { ProductEntity } from 'src/products/entities/product.entity';
import { UnitsEntity } from 'src/unit/entities/units.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('products_units')
export class ProductsUnitsEntity {
  @PrimaryGeneratedColumn()
  correlative: string;

  @ManyToOne(() => UnitsEntity, units => units.code, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'unit', referencedColumnName: 'code' })
  @Column()
  unit: UnitsEntity;

  @ManyToOne(() => ProductEntity, product => product.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'product_code',
    referencedColumnName: 'code',
  })
  @Column()
  product_code: ProductEntity;

  @Column()
  main_unit: boolean;

  @Column()
  conversion_factor: number;

  @Column()
  unit_type: number;

  @Column()
  show_in_screen: boolean;

  @Column()
  is_for_buy: boolean;

  @Column()
  is_for_sale: boolean;

  @Column()
  unitary_cost: number;

  @Column()
  calculated_cost: number;

  @Column()
  average_cost: number;

  @Column()
  perc_waste_cost: number;

  @Column()
  perc_handling_cost: number;

  @Column()
  perc_operating_cost: number;

  @Column()
  perc_additional_cost: number;

  @Column()
  maximum_price: number;

  @Column()
  offer_price: number;

  @Column()
  higher_price: number;

  @Column()
  minimum_price: number;

  @Column()
  perc_maximum_price: number;

  @Column()
  perc_offer_price: number;

  @Column()
  perc_higher_price: number;

  @Column()
  perc_minimum_price: number;

  @Column({ default: 0 })
  perc_freight_cost: number;

  @Column({ default: 0 })
  perc_discount_provider: number;

  @Column({ default: 0 })
  length: number;

  @Column({ default: 0 })
  height: number;

  @Column({ default: 0 })
  width: number;

  @Column({ default: 0 })
  weight: number;

  @Column({ default: 0 })
  capacitance: number;
}

/*

-- Table: products_units

-- DROP TABLE products_units;

CREATE TABLE products_units
(
  correlative serial NOT NULL,
  unit character varying,
  product_code character varying,
  main_unit boolean,
  conversion_factor double precision,
  unit_type integer,
  show_in_screen boolean,
  is_for_buy boolean,
  is_for_sale boolean,
  unitary_cost double precision,
  calculated_cost double precision,
  average_cost double precision,
  perc_waste_cost double precision,
  perc_handling_cost double precision,
  perc_operating_cost double precision,
  perc_additional_cost double precision,
  maximum_price double precision,
  offer_price double precision,
  higher_price double precision,
  minimum_price double precision,
  perc_maximum_price double precision,
  perc_offer_price double precision,
  perc_higher_price double precision,
  perc_minimum_price double precision,
  perc_freight_cost double precision DEFAULT 0,
  perc_discount_provider double precision DEFAULT 0,
  lenght double precision DEFAULT 0,
  height double precision DEFAULT 0,
  width double precision DEFAULT 0,
  weight double precision DEFAULT 0,
  capacitance double precision DEFAULT 0,


  CONSTRAINT products_units_pkey PRIMARY KEY (correlative ),


  listo
  CONSTRAINT products_units_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,

  listo
  CONSTRAINT products_units_unit_fkey FOREIGN KEY (unit)
      REFERENCES units (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_units
  OWNER TO postgres;


*/
