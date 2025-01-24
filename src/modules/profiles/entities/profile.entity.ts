import { ObjectId } from 'mongodb';
import { BeforeInsert, Column, Entity, ObjectIdColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('profiles')
export class ProfileEntity {
  @ObjectIdColumn()
  private _id: ObjectId;

  @Column({ unique: true })
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @BeforeInsert()
  private generateId() {
    this.id = v4();
  }
}
