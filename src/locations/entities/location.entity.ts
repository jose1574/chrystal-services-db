import { Entity, Column, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm';
import { StoreEntity } from 'src/stores/entities/store.entity';

@Entity('locations')
export class LocationEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  description: string;

  @OneToOne((type) => StoreEntity)
  @JoinColumn({
    name: 'parent_store'
  })
  @Column()
  parent_store: StoreEntity;
}
 /*
 -- Table: locations

-- DROP TABLE locations;

CREATE TABLE locations
(
  code character varying NOT NULL,
  description character varying,
  parent_store character varying,
  CONSTRAINT location_pkey PRIMARY KEY (code ),
  CONSTRAINT locations_parent_store_fkey FOREIGN KEY (parent_store)
      REFERENCES store (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE locations
  OWNER TO postgres;

 */