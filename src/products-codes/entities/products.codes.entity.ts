import {Entity, Column, PrimaryColumn} from'typeorm'

@Entity('products_codes')
export class ProductsCodesEntity {

    @PrimaryColumn('varchar', {nullable: false})
    main_code: string;

    @Column('character varying', {nullable: false})
    other_code: string;

    @Column('character varying', {default: 'C'})
    code_type: string;

}