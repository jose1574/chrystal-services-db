import { ProductEntity } from 'src/products/entities/product.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('products_codes')
export class ProductCodeEntity {
  
  @PrimaryColumn({ type: 'varchar' })
  other_code: string;

  @ManyToOne(() => ProductEntity, product => product.code)
  @JoinColumn({ name: 'main_code', referencedColumnName: 'code' })
  @Column({ type: 'varchar' })
  main_code: ProductEntity;

  @Column({ type: 'varchar', default: 'C' })
  code_type: string;
}

/*


-- Table: products_codes

-- DROP TABLE products_codes;

CREATE TABLE products_codes
(
  main_code character varying NOT NULL,
  other_code character varying NOT NULL,
  code_type character varying DEFAULT 'C'::character varying,
  CONSTRAINT products_codes_pkey PRIMARY KEY (other_code ),

  
  CONSTRAINT products_codes_main_code_fkey FOREIGN KEY (main_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_codes
  OWNER TO postgres;

*/
