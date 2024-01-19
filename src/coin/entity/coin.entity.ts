import { Column, Entity, PrimaryColumn } from "typeorm"; 

@Entity('coin')
export class CoinEntity {

    @PrimaryColumn({ type: 'varchar', nullable: false })
    code: string;
  
    @Column({ type: 'varchar' })
    description: string;
  
    @Column({ type: 'varchar' })
    symbol: string;
  
    @Column({ type: 'double precision' })
    sales_aliquot: number;
  
    @Column({ type: 'double precision' })
    buy_aliquot: number;
  
    @Column({ type: 'integer', default: 0 })
    factor_type: number;
  
    @Column({ type: 'integer' })
    rounding_type: number;
  
    @Column({ type: 'varchar', default: '01' })
    status: string;
  
    @Column({ type: 'boolean', default: true })
    show_in_browsers: boolean;
  
    @Column({ type: 'boolean', default: false })
    value_inventory: boolean;
  
    @Column({ type: 'boolean', default: false })
    apply_igtf: boolean;
    
}

/* 
CREATE TABLE coin
(
  code character varying NOT NULL,
  description character varying,
  symbol character varying,
  sales_aliquot double precision,
  buy_aliquot double precision,
  factor_type integer DEFAULT 0,
  rounding_type integer,
  status character varying DEFAULT '01'::character varying,
  show_in_browsers boolean NOT NULL DEFAULT true,
  value_inventory boolean NOT NULL DEFAULT false,
  apply_igtf boolean DEFAULT false,
  
  CONSTRAINT coin_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE coin
  OWNER TO postgres;


*/