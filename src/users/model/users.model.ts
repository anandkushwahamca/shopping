import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from 'class-transformer';
import mongoose, { ObjectId } from 'mongoose';
import { Role } from 'src/common/enum/role.enum';
import { Profile, ProfileSchema } from './profile.model';

export type UsersDocuments = Users & Document;

@Schema()
export class Users {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: Role, default: Role.User })
  role: Role;

  @Prop({
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Profile.name,
      childSchemas: ProfileSchema,
    },
  })
  @Type(() => Profile)
  profile: Profile;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
