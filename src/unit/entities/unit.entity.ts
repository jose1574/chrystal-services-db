import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('units')
export class UnitEntity {
    @PrimaryColumn()
    code: string;

    @Column()
    description: string
}