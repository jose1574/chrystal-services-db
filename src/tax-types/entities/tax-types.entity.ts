import { TaxesEntity } from 'src/taxes/entities/taxes.entity';
import { Column, PrimaryColumn, Entity, OneToMany } from 'typeorm';

@Entity('tax_types')
export class TaxTypesEntity {
  @PrimaryColumn({nullable: false})
  code: number;

  @Column({ type: 'character varying' })
  description: string;


  @Column({ type: 'integer' })
  fiscal_printer_position: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}

/* 

-- Table: tax_types

-- DROP TABLE tax_types;

CREATE TABLE tax_types
(
  code integer NOT NULL,
  description character varying,
  fiscal_printer_position integer,
  status boolean DEFAULT true,
  CONSTRAINT tax_types_pkey PRIMARY KEY (code )
)
WITH (
  OIDS=FALSE
);
ALTER TABLE tax_types
  OWNER TO postgres;

*/
