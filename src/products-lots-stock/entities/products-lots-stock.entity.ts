import { LocationEntity } from 'src/locations/entities/location.entity';
import { ProductsLotsEntity } from 'src/products-lots/entities/products-lots.entity';
import { StoreEntity } from 'src/stores/entities/store.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products_lots_stock')
export class ProductsLotsStockEntity {
    
@ManyToOne(() => ProductsLotsEntity, productsLots => productsLots.correlative)
@JoinColumn({
    name: 'main_correlative', 
    referencedColumnName: 'correlative',
  })
  @PrimaryColumn()
  main_correlative: ProductsLotsEntity;

  @ManyToOne(() => StoreEntity, store => store.code, {onUpdate: 'CASCADE', onDelete:'RESTRICT'})
  @JoinColumn({
    name: 'store', 
    referencedColumnName: 'code',
  })
  @PrimaryColumn()
  store: StoreEntity;

  @ManyToOne(() => LocationEntity, location => location.code, {onUpdate: 'CASCADE', onDelete:'RESTRICT'})
  @JoinColumn({
    name: 'locations', 
    referencedColumnName: 'code',
  })
  @PrimaryColumn()
  locations: LocationEntity;


  @Column({ type: 'double precision', default: 0 })
  stock: number;

  @Column({ type: 'double precision', default: 0 })
  ordered_stock: number;

  @Column({ type: 'double precision', default: 0 })
  committed_stock: number;
}

/* 
-- Table: products_lots_stock

-- DROP TABLE products_lots_stock;

CREATE TABLE products_lots_stock
(
  main_correlative integer NOT NULL,
  store character varying NOT NULL,
  locations character varying NOT NULL,
  stock double precision DEFAULT 0,
  ordered_stock double precision DEFAULT 0,
  committed_stock double precision DEFAULT 0,
  CONSTRAINT products_lots_stock_pkey PRIMARY KEY (main_correlative , store , locations ),
  
  CONSTRAINT products_lots_stock_locations_fkey FOREIGN KEY (locations)
      REFERENCES locations (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,


  CONSTRAINT products_lots_stock_main_correlative_fkey FOREIGN KEY (main_correlative)
      REFERENCES products_lots (correlative) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,

  CONSTRAINT products_lots_stock_store_fkey FOREIGN KEY (store)
      REFERENCES store (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_lots_stock
  OWNER TO postgres;

*/
