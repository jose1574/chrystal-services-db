import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  description: string;

  @Column()
  short_name: string;

  @Column()
  mark: string;

  @Column()
  model: string;

  @Column()
  referenc: string;

  @Column()
  department: string;

  @Column()
  days_warranty: number;

  @Column()
  sale_tax: string;

  @Column()
  buy_tax: string;

  @Column()
  rounding_type: number;

  @Column()
  costing_type: number;

  @Column()
  discount: number;

  @Column()
  max_discount: number;

  @Column()
  minimal_sale: number;

  @Column()
  maximal_sale: number;

  @Column()
  status: string;

  @Column()
  origin: string;

  @Column()
  take_department_utility: boolean;

  @Column()
  allow_decimal: boolean;

  @Column()
  edit_name: boolean;

  @Column()
  sale_price: number;

  @Column()
  product_type: string;

  @Column()
  technician: string;

  @Column()
  request_technician: boolean;

  @Column()
  serialized: boolean;

  @Column()
  request_details: boolean;

  @Column()
  request_amount: boolean;

  @Column()
  coin: string;

  @Column()
  allow_negative_stock: boolean;

  @Column()
  use_scale: boolean;

  @Column()
  add_unit_description: boolean;

  @Column()
  use_lots: boolean;

  @Column()
  lots_order: number;

  @Column()
  minimal_stock: number;

  @Column()
  notify_minimal_stock: boolean;

  @Column()
  size: string;

  @Column()
  color: string;

  @Column()
  extract_net_from_unit_cost_plus_tax: boolean;

  @Column()
  maximum_stock: number; 
}
