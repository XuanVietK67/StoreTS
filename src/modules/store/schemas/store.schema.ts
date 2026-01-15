import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoreDocument = HydratedDocument<Store>;

@Schema({ timestamps: true })
export class Store {
  @Prop({ required: true, unique: true, trim: true })
  name: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
