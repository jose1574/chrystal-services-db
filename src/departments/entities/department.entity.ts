import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('department')
export class DepartmentEntity {
  @PrimaryColumn()
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'double precision' })
  perc_maximum_price: number;

  @Column({ type: 'double precision' })
  perc_minimum_price: number;

  @Column({ type: 'double precision' })
  perc_offer_price: number;

  @Column({ type: 'double precision' })
  perc_higher_price: number;

  @Column({ type: 'varchar', default: '00' })
  father_department: string;
}  

/*

CREATE TABLE department
(
  code character varying NOT NULL,
  description character varying,
  perc_maximum_price double precision,
  perc_minimum_price double precision,
  perc_offer_price double precision,
  perc_higher_price double precision,
  father_department character varying NOT NULL DEFAULT '00'::character varying,

  CONSTRAINT department_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE department
  OWNER TO postgres;

CREATE TRIGGER set_department
  AFTER INSERT
  ON department
  FOR EACH ROW
  EXECUTE PROCEDURE set_department();

*/
