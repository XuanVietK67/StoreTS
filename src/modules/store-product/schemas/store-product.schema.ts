import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Product } from 'src/modules/product/schemas/product.schema';
import { Store } from 'src/modules/store/schemas/store.schema';

export type StoreProductDocument = HydratedDocument<StoreProduct>;

@Schema({ timestamps: true })
export class StoreProduct {
  @Prop({
    type: Types.ObjectId,
    ref: Store.name,
    required: true,
    index: true,
  })
  storeId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Product.name,
    required: true,
    index: true,
  })
  productId: Types.ObjectId;
}

export const StoreProductSchema = SchemaFactory.createForClass(StoreProduct);

StoreProductSchema.index({ storeId: 1, productId: 1 }, { unique: true });
StoreProductSchema.index({ storeId: 1 });
StoreProductSchema.index({ productId: 1 });
