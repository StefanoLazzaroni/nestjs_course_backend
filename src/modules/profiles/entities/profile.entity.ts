import { ObjectId } from 'mongodb';
import { Column, ObjectIdColumn } from 'typeorm';

export class Profile {
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
}
