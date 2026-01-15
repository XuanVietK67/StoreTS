import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from 'src/modules/store/schemas/store.schema';
import { Model } from 'mongoose';
import { CreateStoreDto } from 'src/modules/store/dto/create-store.dto';
import { UpdateStoreDto } from 'src/modules/store/dto/update-store.dto';

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

  findAll() {
    return `This action returns all store`;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
