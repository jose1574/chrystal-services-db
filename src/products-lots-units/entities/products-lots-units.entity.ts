import { ProductsLotsEntity } from "src/products-lots/entities/products-lots.entity";
import { ProductsUnitsEntity } from "src/products-units/entities/products-units.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('products_lots_units')
export class ProductsLotsUnitsEntity {

    @ManyToOne(() => ProductsUnitsEntity, productUnit => productUnit.correlative)
    @JoinColumn({
        name: 'main_correlative',
        referencedColumnName: 'correlative',
    })
    @PrimaryColumn({nullable: false})
    main_correlative: ProductsUnitsEntity;


    @ManyToOne(() => ProductsLotsEntity, productLots => productLots.correlative)
    @JoinColumn({
        name: 'lots_correlative',
        referencedColumnName: 'correlative',
    })
    @PrimaryColumn({nullable: false})
  lots_correlative: ProductsLotsEntity;
  
  @Column({type: 'double precision'})
  unitary_cost: number;
  
  @Column({type: 'double precision'})
  calculated_cost: number;
  
  @Column({type: 'double precision'})
  average_cost: number;
  
  @Column({type: 'double precision'})
  perc_waste_cost: number;
  
  @Column({type: 'double precision'})
  perc_handling_cost: number;
  
  @Column({type: 'double precision'})
  perc_operating_cost: number;
  
  @Column({type: 'double precision'})
  perc_additional_cost: number;
  
  @Column({type: 'double precision'})
  maximum_price: number;
  
  @Column({type: 'double precision'})
  offer_price: number;
  
  @Column({type: 'double precision'})
  higher_price: number;
  
  @Column({type: 'double precision'})
  minimum_price: number;
  
  @Column({type: 'double precision'})
  perc_maximum_price: number;
  
  @Column({type: 'double precision'})
  perc_offer_price: number;
  
  @Column({type: 'double precision'})
  perc_higher_price: number;
  
  @Column({type: 'double precision'})
  perc_minimum_price: number;
  
  @Column({type: 'double precision', default: 0})
  perc_freight_cost: number;
  
  @Column({type: 'double precision', default: 0})
  perc_discount_provider: number;
}

/*

-- Table: products_lots_units

-- DROP TABLE products_lots_units;

CREATE TABLE products_lots_units
(
  main_correlative integer NOT NULL,
  lots_correlative integer NOT NULL,
  unitary_cost: number;
  calculated_cost double precision,
  average_cost double precision,
  perc_waste_cost double precision,
  perc_handling_cost double precision,
  perc_operating_cost double precision,
  perc_additional_cost double precision,
  maximum_price double precision,
  offer_price double precision,
  higher_price double precision,
  minimum_price double precision,
  perc_maximum_price double precision,
  perc_offer_price double precision,
  perc_higher_price double precision,
  perc_minimum_price double precision,
  perc_freight_cost double precision DEFAULT 0,
  perc_discount_provider double precision DEFAULT 0,

  CONSTRAINT products_lots_units_pkey PRIMARY KEY (main_correlative , lots_correlative ),

  CONSTRAINT products_lots_units_lots_correlative_fkey FOREIGN KEY (lots_correlative)
      REFERENCES products_lots (correlative) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,

  CONSTRAINT products_lots_units_main_correlative_fkey FOREIGN KEY (main_correlative)
      REFERENCES products_units (correlative) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_lots_units
  OWNER TO postgres;

*/