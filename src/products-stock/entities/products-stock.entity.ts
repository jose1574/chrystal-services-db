import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products_stock')
export class ProductStockEntity {
  @Column({ nullable: false })
  product_code: string;

  @PrimaryColumn({ nullable: false })
  store: string;

  @PrimaryColumn({ nullable: false })
  locations: string;

  @Column({ type: 'double precision' })
  stock: number;

  @Column({ type: 'double precision', default: 0 })
  ordered_stock: string;

  @Column({ type: 'double precision', default: 0 })
  committed_stock: number;
}
