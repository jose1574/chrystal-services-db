import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('person_type')
export class PersonTypeEntity {
  @PrimaryColumn({ type: 'character varying', nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;
}


/*

-- Table: person_type

-- DROP TABLE person_type;

CREATE TABLE person_type
(
  code character varying NOT NULL,
  description character varying,
  CONSTRAINT client_type_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE person_type
  OWNER TO postgres;


 */