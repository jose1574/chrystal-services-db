import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('status')
export class StatusEntity {
  @PrimaryColumn()
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'boolean' })
  internal_use: boolean;
}


/*
-- Table: status

-- DROP TABLE status;

CREATE TABLE status
(
  code character varying NOT NULL,
  description character varying,
  internal_use boolean,
  CONSTRAINT status_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE status
  OWNER TO postgres;

*/