import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  mobileNumber: number;

  @Prop()
  city: string;

  @Prop()
  street: string;

  @Prop()
  imageContent: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
