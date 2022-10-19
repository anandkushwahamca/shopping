import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import mongoose from 'mongoose';
import { Products } from '../products/products.model';

export type OrderDocuments = Order & Document;

@Schema()
export class Order {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Products.name,
        required: true,
      },
    ],
  })
  products: Products;

  @Prop({ type: Number, default: 1 })
  quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
