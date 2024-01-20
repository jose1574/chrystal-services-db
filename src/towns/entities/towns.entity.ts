import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('towns')
export class TownsEntity {
  @PrimaryColumn({ nullable: false })
  code: string;

  @Column({type: 'character varying'})
  description: string;
}

/*
-- Table: towns

-- DROP TABLE towns;

CREATE TABLE towns
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT towns_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE towns
  OWNER TO postgres;



*/
