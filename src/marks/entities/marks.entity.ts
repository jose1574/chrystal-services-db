import { Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('marks')
export class MarksEntity {
  @PrimaryColumn()
  code: string;

  @Column()
  description: string;
}
