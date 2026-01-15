import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [String], default: [] })
  toppings: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
