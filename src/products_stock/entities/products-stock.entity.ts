import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('products_stock')
export class ProductsStockEntity {
    @PrimaryColumn('character varying')
    product_code: string;

    @Column('character varying')
    store: string;

    @Column('character varying')
    locations: string;

    @Column('double precision')
    stock: number;

    @Column('double precision', {default: 0})
    ordered_stock: number;

    @Column('double precision', {default: 0})
    committed_stock: number;

}