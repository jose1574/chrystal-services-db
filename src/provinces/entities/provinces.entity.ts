import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('provinces')
export class ProvincesEntity {
  @PrimaryColumn({ nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;
}

/*

-- Table: provinces

-- DROP TABLE provinces;

CREATE TABLE provinces
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT provinces_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE provinces
  OWNER TO postgres;

*/
