import { StatusEntity } from 'src/status/entities/status.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('technician')
export class TechnicianEntity {
  @PrimaryColumn()
  code: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;


  @ManyToOne(() => StatusEntity, status => status.code)
  @JoinColumn({
    name: 'status', 
    referencedColumnName: 'code'
  })
  @Column({ type: 'varchar' })
  status: StatusEntity;

  @Column({ type: 'double precision', default: 0 })
  percent_commission_maximum_price: number;

  @Column({ type: 'double precision', default: 0 })
  percent_commission_offer_price: number;

  @Column({ type: 'double precision', default: 0 })
  percent_commission_higher_price: number;

  @Column({ type: 'double precision', default: 0 })
  percent_commission_minimum_price: number;

  @Column({ type: 'double precision', default: 0 })
  percent_commission_variable_price: number;
}
/*
-- Table: technician

-- DROP TABLE technician;

CREATE TABLE technician
(
  code character varying NOT NULL,
  description character varying,
  status character varying,
  percent_commission_maximum_price double precision DEFAULT 0,
  percent_commission_offer_price double precision DEFAULT 0,
  percent_commission_higher_price double precision DEFAULT 0,
  percent_commission_minimum_price double precision DEFAULT 0,
  percent_commission_variable_price double precision DEFAULT 0,


  CONSTRAINT technician_pkey PRIMARY KEY (code ),

  CONSTRAINT technician_status_fkey FOREIGN KEY (status)
      REFERENCES status (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
WITH (
  OIDS=FALSE
);
ALTER TABLE technician
  OWNER TO postgres;

*/
