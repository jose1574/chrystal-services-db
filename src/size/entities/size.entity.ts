import { Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('sizes')
export class SizeEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  description: string;
}
