import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    code: string;

    @Column() 
    description: string;

    @Column()
    sale_price: number;

}