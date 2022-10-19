import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/common/enum/role.enum';

export type UsersDocuments = Users & Document;

@Schema()
export class Users {
  @Prop()
  id: string;

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
}

export const UsersSchema = SchemaFactory.createForClass(Users);
