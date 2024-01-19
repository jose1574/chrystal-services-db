import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products_units')
export class ProductsUnitEntity {
  @PrimaryColumn()
  correlative: number;

  @Column()
  unit: string;

  @Column()
  product_code: string;

  @Column()
  main_unit: boolean;

  @Column()
  conversion_factor: number;

  @Column({type: 'double precision'})
  unit_type: number;

  @Column()
  show_in_screen: boolean;

  @Column()
  is_for_buy: boolean;

  @Column()
  is_for_sale: boolean;

  @Column({type: 'double precision'})
  unitary_cost: number;

  @Column({type: 'double precision'})
  calculated_cost: number;

  @Column({type: 'double precision'})
  average_cost: number;

  @Column({type: 'double precision'})
  perc_waste_cost: number;

  @Column({type: 'double precision'})
  perc_handling_cost: number;

  @Column({type: 'double precision'})
  perc_operating_cost: number;

  @Column({type: 'double precision'})
  perc_additional_cost: number;

  @Column({type: 'double precision'})
  maximum_price: number;

  @Column({type: 'double precision'})
  offer_price: number;

  @Column({type: 'double precision'})
  higher_price: number;

  @Column({type: 'double precision'})
  minimum_price: number;

  @Column({type: 'double precision'})
  perc_maximum_price: number;

  @Column({type: 'double precision'})
  perc_offer_price: number;

  @Column({type: 'double precision'})
  perc_higher_price: number;

  @Column({type: 'double precision'})
  perc_minimum_price: number;

  @Column({type: 'double precision' })
  perc_freight_cost: string;
 
  @Column({type: 'double precision'})
  perc_discount_provider: number;

  @Column( {type: 'double precision'})
  lenght: number;

  @Column({ type: 'double precision' })
  height: number;

  @Column({ type: 'double precision' })
  width: number;

  @Column({ type: 'double precision' })
  weight: number;

  @Column({ type: 'double precision' })
  capacitance: number;
}
