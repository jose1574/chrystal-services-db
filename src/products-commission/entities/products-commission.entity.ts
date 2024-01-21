import { ProductEntity } from 'src/products/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('products_commission')
export class ProductsCommissionEntity {
    @ManyToOne(() => ProductEntity, product => product.code, {onUpdate: 'CASCADE', onDelete: 'RESTRICT'})
    @JoinColumn({
        name: 'product_code',
        referencedColumnName: 'code'
    })
  @PrimaryColumn({ nullable: false })
  product_code: ProductEntity;

  @PrimaryColumn({ nullable: false })
  comission_type: string;

  @Column({ type: 'character varying' })
  value_type: string;

  @Column({ type: 'double precision' })
  perc_maximum_price: number;

  @Column({ type: 'double precision' })
  perc_offer_price: number;

  @Column({ type: 'double precision' })
  perc_higher_price: number;

  @Column({ type: 'double precision' })
  perc_minimum_price: number;

  @Column({ type: 'double precision' })
  perc_variable_price: number;
}
/*

-- Table: products_commission

-- DROP TABLE products_commission;

CREATE TABLE products_commission
(
  product_code character varying NOT NULL,
  comission_type character varying NOT NULL,
  value_type character varying,
  perc_maximum_price double precision,
  perc_offer_price double precision,
  perc_higher_price double precision,
  perc_minimum_price double precision,
  perc_variable_price double precision,
  
  CONSTRAINT products_commission_pkey PRIMARY KEY (product_code , comission_type ),

  CONSTRAINT products_commission_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_commission
  OWNER TO postgres;

*/
