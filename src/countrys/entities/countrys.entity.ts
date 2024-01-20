import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('countrys')
export class CountrysEntity {
  @PrimaryColumn({ type: 'character varying', nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;
}

/*

-- Table: countrys

-- DROP TABLE countrys;

CREATE TABLE countrys
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT country_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE countrys
  OWNER TO postgres;

*/
