import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('products_units')
export class ProductsUnitEntity {
  @PrimaryColumn('int')
  correlative: number;

  @Column('character varying')
  unit: string;

  @Column('character varying')
  product_code: string;

  @Column('boolean')
  main_unit: boolean;

  @Column('double precision')
  conversion_factor: number;

  @Column('integer')
  unit_type: number;

  @Column('boolean')
  show_in_screen: boolean;

  @Column('boolean')
  is_for_buy: boolean;

  @Column('boolean')
  is_for_sale: boolean;

  @Column('double precision')
  unitary_cost: number;

  @Column('double precision')
  calculated_cost: number;

  @Column('double precision')
  average_cost: number;

  @Column('double precision')
  perc_waste_cost: number;

  @Column('double precision')
  perc_handling_cost: number;

  @Column('double precision')
  perc_operating_cost: number;

  @Column('double precision')
  perc_additional_cost: number;

  @Column('double precision')
  maximum_price: number;

  @Column('double precision')
  offer_price: number;

  @Column('double precision')
  higher_price: number;

  @Column('double precision')
  minimum_price: number;

  @Column('double precision')
  perc_maximum_price: number;

  @Column('double precision')
  perc_offer_price: number;

  @Column('double precision')
  perc_higher_price: number;

  @Column('double precision')
  perc_minimum_price: number;

  @Column('double precision', { default: 0 })
  perc_freight_cost: number;

  @Column('double precision', { default: 0 })
  perc_discount_provider: number;

  @Column('double precision', { default: 0 })
  lenght: number;

  @Column('double precision', { default: 0 })
  height: number;

  @Column('double precision', { default: 0 })
  width: number;

  @Column('double precision', { default: 0 })
  weight: number;

  @Column('double precision', { default: 0 })
  capacitance: number;
}
