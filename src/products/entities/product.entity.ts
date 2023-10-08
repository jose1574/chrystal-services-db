import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryColumn('varchar')
  code: string;

  @Column('varchar' )
  description: string;

  @Column({ type: String })
  short_name: string;

  @Column({ type: String })
  mark: string;

  @Column({ type: String })
  model: string;

  @Column({ type: String })
  referenc: string;

  @Column({ type: String })
  department: string;

  @Column({ type: Number })
  days_warranty: number;

  @Column({ type: String })
  sale_tax: string;

  @Column({ type: String })
  buy_tax: string;

  @Column({ type: Number })
  rounding_type: number;

  @Column({ type: Number })
  costing_type: number;

  @Column({ type: Number })
  discount: number;

  @Column({ type: Number, default: 0, nullable: false })
  max_discount: number;

  @Column({ type: Number, default: 0, nullable: false })
  minimal_sale: number;

  @Column({ type: Number, default: 0, nullable: false })
  maximal_sale: number;

  @Column({ type: String })
  status: string;

  @Column({ type: String })
  origin: string;

  @Column({ type: Boolean })
  take_department_utility: boolean;

  @Column({ type: Boolean })
  allow_decimal: boolean;

  @Column({ type: Boolean })
  edit_name: boolean;

  @Column({ type: Number })
  sale_price: number;

  @Column({ type: String, default: 'T', nullable: false })
  product_type: string;

  @Column({ type: String, default: '00' })
  technician: string;

  @Column({ type: Boolean, default: true })
  request_technician: boolean;

  @Column({ type: Boolean, default: false })
  serialized: boolean;

  @Column({ type: Boolean, default: false })
  request_details: boolean;

  @Column({ type: Boolean, default: false })
  request_amount: boolean;

  @Column({ type: String })
  coin: string;

  @Column({ type: Boolean, default: false })
  allow_negative_stock: boolean;

  @Column({ type: Boolean, default: false })
  use_scale: boolean;

  @Column({ type: Boolean, default: false })
  add_unit_description: boolean;

  @Column({ type: Boolean, default: false })
  use_lots: boolean;

  @Column({ type: Number, default: 0 })
  lots_order: number;

  @Column({ type: Number, default: 0 })
  minimal_stock: number;

  @Column({ type: Boolean, default: false })
  notify_minimal_stock: boolean;

  @Column({ type: String, default: '' })
  size: string;

  @Column({ type: String, default: '' })
  color: string;

  @Column({ type: Boolean, default: false })
  extract_net_from_unit_cost_plus_tax: boolean;

  @Column({ type: Boolean, default: false })
  extract_net_from_unit_price_plus_tax: boolean;

  @Column({ type: Number, default: 0 })
  maximum_stock: number;
}
