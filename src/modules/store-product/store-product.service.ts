import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateStoreProductDto } from 'src/modules/store-product/dto/create-store-product.dto';
import { UpdateStoreProductDto } from 'src/modules/store-product/dto/update-store-product.dto';
import { StoreProduct } from 'src/modules/store-product/schemas/store-product.schema';

@Injectable()
export class StoreProductService {
  constructor(
    @InjectModel(StoreProduct.name)
    private storeProductModel: Model<StoreProduct>,
  ) {}

  async create(createStoreProductDto: CreateStoreProductDto) {
    const { storeId, productId } = createStoreProductDto;
    try {
      const res = await this.storeProductModel.create({
        storeId: new Types.ObjectId(storeId),
        productId: new Types.ObjectId(productId),
      });
      return res
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return `This action returns all StoreProductProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} StoreProductProduct`;
  }

  update(
    id: number,
    updateStoreProductProductDto: UpdateStoreProductDto,
  ) {
    return `This action updates a #${id} StoreProductProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} StoreProductProduct`;
  }
}
