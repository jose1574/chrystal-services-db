import { CitysEntity } from 'src/citys/entities/citys.entity';
import { CountrysEntity } from 'src/countrys/entities/countrys.entity';
import { PersonTypeEntity } from 'src/person_type/entities/person.entity';
import { ProvincesEntity } from 'src/provinces/entities/provinces.entity';
import { TownsEntity } from 'src/towns/entities/towns.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('provider')
export class ProviderEntity {
  @PrimaryColumn({ nullable: false })
  code: string;

  @Column({ type: 'character varying' })
  description: string;

  @Column({ type: 'character varying' })
  address: string;

  @Column({ type: 'character varying' })
  provider_id: string;

  @Column({ type: 'character varying' })
  email: string;

  @Column({ type: 'character varying' })
  phone: string;

  @Column({ type: 'character varying' })
  contact: string;

  @ManyToOne(() => CountrysEntity, (country) => country.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'country',
    referencedColumnName: 'code',
  })
  @Column()
  country: CountrysEntity;

  @ManyToOne(() => ProvincesEntity, (province) => province.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'province',
    referencedColumnName: 'code',
  })
  @Column()
  province: ProvincesEntity;

  @ManyToOne(() => CitysEntity, (city) => city.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'city',
    referencedColumnName: 'code',
  })
  @Column()
  city: CitysEntity;

  @ManyToOne(() => TownsEntity, (towns) => towns.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'town',
    referencedColumnName: 'code',
  })
  @Column()
  town: TownsEntity;

  @Column({ type: 'double precision' })
  credit_days: number;

  @Column({ type: 'double precision' })
  credit_limit: number;

  @ManyToOne(() => PersonTypeEntity, (person) => person.code, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({
    name: 'provider_type',
    referencedColumnName: 'code',
  })
  @Column({ type: 'character varying' })
  provider_type: PersonTypeEntity;

  @Column({ type: 'character varying' })
  status: string;

  @Column({ type: 'double precision' })
  domiciled: number;

  @Column({ type: 'double precision', default: 0 })
  percent_tax_retention: number;

  @Column({ type: 'double precision', default: 0 })
  percent_municipal_retention: number;

  @Column({ type: 'boolean', default: false })
  retention_tax_agent: boolean;

  @Column({ type: 'boolean', default: false })
  retention_municipal_agent: boolean;

  @Column({ type: 'boolean', default: false })
  retention_islr_agent: boolean;

  @Column({ type: 'boolean', default: false })
  perception_igtf_agent: boolean;

  // @OneToMany(() => ProductsProviderEntity, (productsProvider) => productsProvider.provider_code)
  // productsProvider: ProductsProviderEntity[];
}

/*

-- Table: provider

-- DROP TABLE provider;

CREATE TABLE provider
(
  code character varying NOT NULL,
  description character varying,
  address character varying,
  provider_id character varying,
  email character varying,
  phone character varying,
  contact character varying,
  country character varying,
  province character varying,
  city character varying,
  town character varying,
  credit_days integer,
  credit_limit double precision,
  provider_type character varying,
  status character varying,
  domiciled integer,
  percent_tax_retention double precision DEFAULT 0,
  percent_municipal_retention double precision DEFAULT 0,
  retention_tax_agent boolean DEFAULT false,
  retention_municipal_agent boolean DEFAULT false,
  retention_islr_agent boolean DEFAULT false,
  perception_igtf_agent boolean DEFAULT false,

  CONSTRAINT provider_pkey PRIMARY KEY (code ),

  CONSTRAINT provider_country_fkey FOREIGN KEY (country)
      REFERENCES countrys (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,
  
  CONSTRAINT provider_city_fkey FOREIGN KEY (city)
      REFERENCES citys (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,
      

      
  CONSTRAINT provider_province_fkey FOREIGN KEY (province)
      REFERENCES provinces (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,


  CONSTRAINT provider_town_fkey FOREIGN KEY (town)
      REFERENCES towns (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT,

      
  CONSTRAINT provider_type_fkey FOREIGN KEY (provider_type)
      REFERENCES person_type (code) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT


)
WITH (
  OIDS=FALSE
);
ALTER TABLE provider
  OWNER TO postgres;

*/
