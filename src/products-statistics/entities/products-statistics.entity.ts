import { LocationEntity } from 'src/locations/entities/location.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { StoreEntity } from 'src/stores/entities/store.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('products_statistics')
export class ProductsStatisticsEntity {
  @ManyToOne(() => ProductEntity, (product) => product.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'product_code',
    referencedColumnName: 'code',
  })
  @PrimaryColumn({ nullable: false })
  product_code: ProductEntity;

  @ManyToOne(() => StoreEntity, (store) => store.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'store',
    referencedColumnName: 'code',
  })
  @PrimaryColumn({ nullable: false })
  store: StoreEntity;

  @ManyToOne(() => LocationEntity, (location) => location.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'locations',
    referencedColumnName: 'code',
  })
  @PrimaryColumn({ nullable: false })
  locations: LocationEntity;

  @PrimaryColumn({ nullable: false })
  statistic_date: Date;

  @Column({ type: 'double precision', default: 0 })
  initial_stock: number;

  @Column({ type: 'double precision', default: 0 })
  load_amount: number;

  @Column({ type: 'double precision', default: 0 })
  download_amount: number;

  @Column({ type: 'double precision', default: 0 })
  load_amount_by_transfer: number;

  @Column({ type: 'double precision', default: 0 })
  download_amount_by_transfer: number;

  @Column({ type: 'double precision', default: 0 })
  load_amount_by_adjustment: number;

  @Column({ type: 'double precision', default: 0 })
  download_amount_by_adjustment: number;

  @Column({ type: 'double precision', default: 0 })
  sales_delivery_note_amount: number;

  @Column({ type: 'double precision', default: 0 })
  sales_bill_amount: number;

  @Column({ type: 'double precision', default: 0 })
  sales_devolution_amount: number;

  @Column({ type: 'double precision', default: 0 })
  sales_credit_note_amount: number;

  @Column({ type: 'double precision', default: 0 })
  shopping_delivery_note_amount: number;

  @Column({ type: 'double precision', default: 0 })
  shopping_bill_amount: number;

  @Column({ type: 'double precision', default: 0 })
  shopping_devolution_amount: number;

  @Column({ type: 'double precision', default: 0 })
  shopping_credit_note_amount: number;

  @Column({ type: 'double precision', default: 0 })
  final_stock: number;

  @Column({ type: 'double precision', default: 0 })
  unitary_cost: number;

  @Column({ type: 'double precision', default: 0 })
  average_cost: number;

  @Column({ type: 'double precision', default: 0 })
  calculated_cost: number;

  @Column({ type: 'double precision', default: 0 })
  maximum_price: number;

  @Column({ type: 'double precision', default: 0 })
  offer_price: number;

  @Column({ type: 'double precision', default: 0 })
  higher_price: number;

  @Column({ type: 'double precision', default: 0 })
  minimum_price: number;

  @Column({ type: 'character varying' })
  period: string;

  @Column({ type: 'double precision', default: 0 })
  sales_income_amount: number;

  @Column({ type: 'double precision', default: 0 })
  internal_download_amount: number;

  @Column({ type: 'double precision', default: 0 })
  shopping_expense_amount: number;
}

/*
-- Table: products_statistics

-- DROP TABLE products_statistics;

CREATE TABLE products_statistics
(
  product_code character varying NOT NULL,
  store character varying NOT NULL,
  locations character varying NOT NULL,
  statistic_date date NOT NULL,
  initial_stock double precision DEFAULT 0,
  load_amount double precision DEFAULT 0,
  download_amount double precision DEFAULT 0,
  load_amount_by_transfer double precision DEFAULT 0,
  download_amount_by_transfer double precision DEFAULT 0,
  load_amount_by_adjustment double precision DEFAULT 0,
  download_amount_by_adjustment double precision DEFAULT 0,
  sales_delivery_note_amount double precision DEFAULT 0,
  sales_bill_amount double precision DEFAULT 0,
  sales_devolution_amount double precision DEFAULT 0,
  sales_credit_note_amount double precision DEFAULT 0,
  shopping_delivery_note_amount double precision DEFAULT 0,
  shopping_bill_amount double precision DEFAULT 0,
  shopping_devolution_amount double precision DEFAULT 0,
  shopping_credit_note_amount double precision DEFAULT 0,
  final_stock double precision DEFAULT 0,
  unitary_cost double precision DEFAULT 0,
  average_cost double precision DEFAULT 0,
  calculated_cost double precision DEFAULT 0,
  maximum_price double precision DEFAULT 0,
  offer_price double precision DEFAULT 0,
  higher_price double precision DEFAULT 0,
  minimum_price double precision DEFAULT 0,
  period character varying,
  sales_income_amount double precision DEFAULT 0,
  internal_download_amount double precision DEFAULT 0,
  shopping_expense_amount double precision DEFAULT 0,


  CONSTRAINT products_statistics_pkey PRIMARY KEY (product_code , store , locations , statistic_date ),


  CONSTRAINT products_statistics_location_fkey FOREIGN KEY (locations)
      REFERENCES locations (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,


  CONSTRAINT products_statistics_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,


  CONSTRAINT products_statistics_store_fkey FOREIGN KEY (store)
      REFERENCES store (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_statistics
  OWNER TO postgres;

-- Trigger: set_products_statistics on products_statistics

-- DROP TRIGGER set_products_statistics ON products_statistics;

CREATE TRIGGER set_products_statistics
  BEFORE INSERT OR UPDATE
  ON products_statistics
  FOR EACH ROW
  EXECUTE PROCEDURE set_products_statistics();


*/
