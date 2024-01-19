import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';

import { DepartmentEntity } from 'src/departments/entities/department.entity';
import { CoinEntity } from 'src/coin/entity/coin.entity';
import { TaxesEntity } from 'src/taxes/entities/taxes.entity';
import { OriginEntity } from 'src/origin/entities/origin.entity';
import { StatusEntity } from 'src/status/entities/status.entity';
import { TechnicianEntity } from 'src/technician/entities/technician.entity';
import { TaxTypeDto } from 'src/tax-types/dtos/tax-types.dto';

@Entity('products')
export class ProductEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  description: string;

  @Column()
  short_name: string;

  @Column()
  mark: string;

  @Column()
  model: string;

  @Column()
  referenc: string;

  @ManyToOne(() => DepartmentEntity, (department) => department)
  @JoinColumn({
    name: 'department',
  })
  @Column({ type: 'character varying' })
  department: DepartmentEntity;

  @Column()
  days_warranty: number;

  @Column()
  sale_tax: string;


  @ManyToOne(() => TaxesEntity, taxes => taxes)
  @JoinColumn({
    name: 'buy_tax',
    referencedColumnName: 'code',
  })
  @Column()
  buy_tax: TaxesEntity;

  @Column()
  rounding_type: number;

  @Column()
  costing_type: number;

  @Column()
  discount: number;

  @Column()
  max_discount: number;

  @Column()
  minimal_sale: number;

  @Column()
  maximal_sale: number;

  @ManyToOne(() => StatusEntity, (status) => status.code)
  @JoinColumn({
    name: 'status',
    referencedColumnName: 'code',
  })
  @Column()
  status: StatusEntity;

  @ManyToOne(() => OriginEntity, (origin) => origin.code)
  @JoinColumn({
    name: 'origin',
    referencedColumnName: 'code',
  })
  @Column()
  origin: OriginEntity;

  @Column()
  take_department_utility: boolean;

  @Column()
  allow_decimal: boolean;

  @Column()
  edit_name: boolean;

  @Column()
  sale_price: number;

  @Column()
  product_type: string;

  @ManyToOne(() => TechnicianEntity, (technician) => technician.code)
  @JoinColumn({
    name: 'technician',
    referencedColumnName: 'code',
  })
  @Column()
  technician: TechnicianEntity;

  @Column()
  request_technician: boolean;

  @Column()
  serialized: boolean;

  @Column()
  request_details: boolean;

  @Column()
  request_amount: boolean;

  @ManyToOne(() => CoinEntity, (coin) => coin.code)
  @JoinColumn({
    name: 'coin',
    referencedColumnName: 'code',
  })
  @Column()
  coin: CoinEntity;

  @Column()
  allow_negative_stock: boolean;

  @Column()
  use_scale: boolean;

  @Column()
  add_unit_description: boolean;

  @Column()
  use_lots: boolean;

  @Column()
  lots_order: number;

  @Column()
  minimal_stock: number;

  @Column()
  notify_minimal_stock: boolean;

  @Column()
  size: string;

  @Column()
  color: string;

  @Column()
  extract_net_from_unit_cost_plus_tax: boolean;

  @Column()
  maximum_stock: number;
}

/* 
-- Table: products

-- DROP TABLE products;

CREATE TABLE products
(
  code character varying NOT NULL,
  description character varying,
  short_name character varying,
  mark character varying,
  model character varying,
  referenc character varying,
  department character varying,
  days_warranty integer,
  sale_tax character varying,
  buy_tax character varying,
  rounding_type integer,
  costing_type integer,
  discount double precision,
  max_discount double precision NOT NULL DEFAULT 0,
  minimal_sale double precision NOT NULL DEFAULT 0,
  maximal_sale double precision NOT NULL DEFAULT 0,
  status character varying,
  origin character varying,
  take_department_utility boolean,
  allow_decimal boolean,
  edit_name boolean,
  sale_price integer,
  product_type character varying NOT NULL DEFAULT 'T'::character varying,
  technician character varying DEFAULT '00'::character varying,
  request_technician boolean DEFAULT true,
  serialized boolean DEFAULT false,
  request_details boolean DEFAULT false,
  request_amount boolean DEFAULT false,
  coin character varying,
  allow_negative_stock boolean DEFAULT false,
  use_scale boolean DEFAULT false,
  add_unit_description boolean DEFAULT false,
  use_lots boolean DEFAULT false,
  lots_order integer DEFAULT 0,
  minimal_stock double precision DEFAULT 0,
  notify_minimal_stock boolean DEFAULT false,
  size character varying DEFAULT ''::character varying,
  color character varying DEFAULT ''::character varying,
  extract_net_from_unit_cost_plus_tax boolean DEFAULT false,
  extract_net_from_unit_price_plus_tax boolean DEFAULT false,
  maximum_stock double precision DEFAULT 0,


  CONSTRAINT products_pkey PRIMARY KEY (code ),

  listo  
  CONSTRAINT products_buy_tax_fkey FOREIGN KEY (buy_tax)
      REFERENCES taxes (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,
      
  listo    
  CONSTRAINT products_coin_fkey FOREIGN KEY (coin)
      REFERENCES coin (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,

  listo    
  CONSTRAINT products_department_fkey FOREIGN KEY (department)
      REFERENCES department (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,
  
  listo
  CONSTRAINT products_origin_fkey FOREIGN KEY (origin)
      REFERENCES origin (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,

  listo
  CONSTRAINT products_sale_tax_fkey FOREIGN KEY (sale_tax)
      REFERENCES taxes (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,

  
  listo
  CONSTRAINT products_status_fkey FOREIGN KEY (status)
      REFERENCES status (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,


  CONSTRAINT products_technician_fkey FOREIGN KEY (technician)
      REFERENCES technician (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT





)
WITH (
  OIDS=FALSE
);
ALTER TABLE products
  OWNER TO postgres;

-- Trigger: set_product on products

-- DROP TRIGGER set_product ON products;

CREATE TRIGGER set_product
  AFTER INSERT
  ON products
  FOR EACH ROW
  EXECUTE PROCEDURE set_product();



*/
