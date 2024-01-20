import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('citys')
export class CitysEntity {
  @PrimaryColumn({ type: 'character varying', nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;
}

/*
-- Table: citys

-- DROP TABLE citys;

CREATE TABLE citys
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT citys_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE citys
  OWNER TO postgres;

*/
