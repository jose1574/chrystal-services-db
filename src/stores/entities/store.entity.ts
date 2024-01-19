import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('store')
export class StoreEntity {
    @PrimaryColumn()
    code: string;

    @Column()
    description: string;
}
 /* 
 -- Table: store

-- DROP TABLE store;

CREATE TABLE store
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT store_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE store
  OWNER TO postgres;

 
 
 */