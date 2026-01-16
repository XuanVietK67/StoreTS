import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateStoreProductDto } from 'src/modules/store-product/dto/create-store-product.dto';
import { UpdateStoreProductDto } from 'src/modules/store-product/dto/update-store-product.dto';
import { StoreProduct } from 'src/modules/store-product/schemas/store-product.schema';
import { FindStoreQueryDto } from 'src/modules/store/dto/update-store.dto';

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
      return res;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async findAllProductsByStore(storeId: string, query: FindStoreQueryDto) {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    return this.storeProductModel.aggregate([
      { $match: { storeId: new Types.ObjectId(storeId) } },

      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product',
        },
      },
      { $unwind: '$product' },
      {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },

            {
              $project: {
                _id: 1,
                product: {
                  _id: 1,
                  name: 1,
                  toppings: 1,
                  price: 1,
                },
              },
            },
          ],
          total: [{ $count: 'count' }],
        },
      },
      {
        $project: {
          data: 1,
          total: { $ifNull: [{ $arrayElemAt: ['$total.count', 0] }, 0] },
        },
      },
    ]);
  }

  findAll() {
    return `This action returns all StoreProductProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} StoreProductProduct`;
  }

  update(id: number, updateStoreProductProductDto: UpdateStoreProductDto) {
    return `This action updates a #${id} StoreProductProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} StoreProductProduct`;
  }
}
