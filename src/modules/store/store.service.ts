import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from 'src/modules/store/schemas/store.schema';
import { isValidObjectId, Model, SortOrder } from 'mongoose';
import { CreateStoreDto } from 'src/modules/store/dto/create-store.dto';
import {
  FindStoreQueryDto,
  UpdateStoreDto,
} from 'src/modules/store/dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private StoreModel: Model<Store>) {}

  async create(createStoreDto: CreateStoreDto) {
    const { name } = createStoreDto;
    try {
      const store = await this.StoreModel.create({
        name,
      });
      return store;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async findAll(query: FindStoreQueryDto) {
    const { page = 1, limit = 10, status, search, sortOrder = 'asc' } = query;
    const filter: any = {};

    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    const sort: Record<string, SortOrder> = {
      name: sortOrder === 'asc' ? 1 : -1,
    };

    const skip = (page - 1) * limit;
    const [stores, total] = await Promise.all([
      this.StoreModel.find(filter)
        .select('name address status createdAt')
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),

      this.StoreModel.countDocuments(filter),
    ]);
    return {
      data: stores,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        sortOrder,
      },
    };
  }

  async findOne(storeId: string) {
    if (!isValidObjectId(storeId)) {
      throw new BadRequestException('Invalid store id');
    }

    const store = await this.StoreModel.findById(storeId)
      .select('_id name status createdAt')
      .lean();

    if (!store) {
      throw new NotFoundException('Store not found');
    }

    return store;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
