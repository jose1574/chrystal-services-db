import { ProductEntity } from 'src/products/entities/product.entity';
import { ProviderEntity } from 'src/provider/entities/provider.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products_provider')
export class ProductsProviderEntity {
  @PrimaryGeneratedColumn()
  line: string;

  @ManyToOne(() => ProductEntity, (product) => product.code)
  @JoinColumn({
    name: 'product_code',
    referencedColumnName: 'code',
  })
  @Column()
  product_code: ProductEntity;

  @ManyToOne(() => ProviderEntity, (provider) => provider.code)
  @JoinColumn({
    name: 'provider_code',
    referencedColumnName: 'code',
  })
  @Column()
  provider_code: ProviderEntity;

  @Column({ type: 'double precision' })
  unitary_cost: number;

  @Column({ type: 'character varying' })
  document_type: string;

  @Column({ type: 'character varying' })
  document_no: string;

  @Column({ type: 'date' })
  emission_date: Date;

  @Column({ type: 'date' })
  register_date: Date;

  @Column({ type: 'double precision', default: 0 })
  amount: number;

  @Column({ type: 'integer', default: 0 })
  unit: number;

  @Column({ type: 'character varying', default: '01' })
  coin_code: string;

  @Column({ type: 'integer', default: 0 })
  related_line: number;
}

/*
-- Table: products_provider

-- DROP TABLE products_provider;

CREATE TABLE products_provider
(
  line serial NOT NULL,
  product_code character varying,
  provider_code character varying,
  unitary_cost double precision,
  document_type character varying,
  document_no character varying,
  emission_date date,
  register_date date,
  amount double precision DEFAULT 0,
  unit integer DEFAULT 0,
  coin_code character varying DEFAULT '01'::character varying,
  related_line integer DEFAULT 0,
  CONSTRAINT products_provider_pkey PRIMARY KEY (line ),


  CONSTRAINT products_provider_product_code_fkey FOREIGN KEY (product_code)
      REFERENCES products (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,

      
  CONSTRAINT products_provider_provider_code_fkey FOREIGN KEY (provider_code)
      REFERENCES provider (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_provider
  OWNER TO postgres;

*/
