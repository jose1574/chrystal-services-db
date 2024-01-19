import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_lots')
export class ProductsLotsEntity {
    @PrimaryGeneratedColumn()
    correlative: string;

    @Column({type: 'character varying'})
    lot_number: string;


    @ManyToOne(() => ProductEntity, product => product.code)
    @JoinColumn({
        name: 'product_code', 
        referencedColumnName: 'code'
    })
    @Column({type: 'character varying'})
    product_code: ProductEntity;


    @Column({type: 'date'})
    entry_date: Date;

    @Column({type: 'character varying'})
    entry_module: string;

    @Column({type: 'integer'})
    entry_correlative: number;

    @Column({type: 'double precision'})
    entry_amount: number;

    @Column({ type: 'boolean'})
    expire: boolean;

    @Column({type: 'date'})
    expire_date: Date;

    @Column({ type: 'boolean'})
    apply_prices: boolean;

    @Column({type: 'date'})
    elaboration_date: Date;
}



/*
-- Table: products_lots

-- DROP TABLE products_lots;

CREATE TABLE products_lots
(
  correlative serial NOT NULL,
  lot_number character varying,
  product_code character varying,
  entry_date date,
  entry_module character varying,
  entry_correlative integer,
  entry_amount double precision,
  expire boolean,
  expire_date date,
  apply_prices boolean,
  elaboration_date date,
  CONSTRAINT products_lots_pkey PRIMARY KEY (correlative ),


  listo
  CONSTRAINT products_lots_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_lots
  OWNER TO postgres;


*/

