import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('sales_operation')
export class SalesOperationEntity {
    @PrimaryColumn()
    correlative: number;

    @Column() 
    operation_type: string

}