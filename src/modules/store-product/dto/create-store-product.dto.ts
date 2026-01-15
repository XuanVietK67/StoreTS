import { IsMongoId } from 'class-validator';

export class CreateStoreProductDto {
  @IsMongoId({ message: 'storeId must be a valid Mongo ObjectId' })
  storeId: string;

  @IsMongoId({ message: 'productId must be a valid Mongo ObjectId' })
  productId: string;
}
