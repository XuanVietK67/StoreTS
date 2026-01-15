import { Module } from '@nestjs/common';
import { StoreProductService } from './store-product.service';
import { StoreProductController } from './store-product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreProduct, StoreProductSchema } from 'src/modules/store-product/schemas/store-product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: StoreProduct.name, schema: StoreProductSchema }])],
  controllers: [StoreProductController],
  providers: [StoreProductService],
})
export class StoreProductModule {}
