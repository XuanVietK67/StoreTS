import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StoreService } from 'src/modules/store/store.service';
import { CreateStoreDto } from 'src/modules/store/dto/create-store.dto';
import { FindStoreQueryDto, UpdateStoreDto } from 'src/modules/store/dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  findAll(@Query() query: FindStoreQueryDto) {
    return this.storeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }
}
