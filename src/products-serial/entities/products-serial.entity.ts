import { LocationEntity } from 'src/locations/entities/location.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { StoreEntity } from 'src/stores/entities/store.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('products_serial')
export class ProductsSerialEntity {
  @ManyToOne(() => ProductEntity, (product) => product.code, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'product_code',
    referencedColumnName: 'code',
  })
  @Column()
  product_code: ProductEntity;

  @PrimaryColumn({ nullable: false })
  line: string;

  @Column({ type: 'character varying' })
  serial_no: string;

  @Column({ type: 'double precision' })
  stock: number;

  @ManyToOne(() => StoreEntity, (store) => store.code, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'store',
    referencedColumnName: 'code',
  })
  @Column()
  store: StoreEntity;

  @ManyToOne(() => LocationEntity, (location) => location.code, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'locations',
    referencedColumnName: 'code',
  })
  @Column()
  locations: LocationEntity;

  @Column({ type: 'integer' })
  correlative_in: number;

  @Column({ type: 'character varying' })
  module_in: string;
}

/*
-- Table: products_serial

-- DROP TABLE products_serial;

CREATE TABLE products_serial
(
  product_code character varying,
  line serial NOT NULL,
  serial_no character varying,
  stock double precision,
  store character varying,
  locations character varying,
  correlative_in integer,
  module_in character varying,

  CONSTRAINT products_serial_pkey PRIMARY KEY (line ),

  CONSTRAINT products_serial_locations_fkey FOREIGN KEY (locations)
      REFERENCES locations (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,

  CONSTRAINT products_serial_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,


  CONSTRAINT products_serial_store_fkey FOREIGN KEY (store)
      REFERENCES store (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_serial
  OWNER TO postgres;

*/
