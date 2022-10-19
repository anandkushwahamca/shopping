import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';

export type ProductsDocuments = Products & Document;

@Schema()
export class Products {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({ type: String, required: true, unique: true })
  productName: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop()
  description: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
