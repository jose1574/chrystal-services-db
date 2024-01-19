import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('origin')
export class OriginEntity {
    @PrimaryColumn()
    code: string;
  
    @Column({ type: 'varchar', nullable: false })
    description: string;
}

/*
-- Table: origin

-- DROP TABLE origin;

CREATE TABLE origin
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT origin_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE origin
  OWNER TO postgres;


*/