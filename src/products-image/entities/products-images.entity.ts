import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity({ name: 'products_image' })
export class ProductsImageEntity {

    @ManyToOne(() => ProductEntity, product => product.code, { onUpdate: 'CASCADE', onDelete: 'RESTRICT'})
    @JoinColumn({
        name: 'main_code',
        referencedColumnName: 'code',
    })
    @PrimaryColumn()
    main_code: ProductEntity;
  
    @Column()
    image_type: string;
  
    
    @Column({type: 'bytea' })
    product_image: Buffer; 

}

/*
-- Table: products_image

-- DROP TABLE products_image;

CREATE TABLE products_image
(
  main_code character varying NOT NULL,
  image_type character varying,
  product_image bytea,

  CONSTRAINT products_image_pkey PRIMARY KEY (main_code ),

  CONSTRAINT products_image_main_code_fkey FOREIGN KEY (main_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_image
  OWNER TO postgres;

*/
