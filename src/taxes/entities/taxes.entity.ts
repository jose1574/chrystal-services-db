import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { TaxTypesEntity } from '../../tax-types/entities/tax-types.entity';

@Entity('taxes')
export class TaxesEntity {
  @PrimaryColumn({ nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;

  @Column({ type: 'double precision' })
  aliquot: number;

  @Column({ type: 'character varying' })
  short_description: string;

  @ManyToOne(() => TaxTypesEntity, (taxType) => taxType.code)
  @JoinColumn({ name: 'line', referencedColumnName: 'code' })
  @Column()
  line: TaxTypesEntity;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}

/*
 (
  code character varying NOT NULL,
  description character varying,
  aliquot double precision,
  short_description character varying,
  line integer NOT NULL,
  status boolean DEFAULT true,
  CONSTRAINT taxes_pkey PRIMARY KEY (code ),
  CONSTRAINT taxes_line_fkey FOREIGN KEY (line)
      REFERENCES tax_types (code) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
 */
