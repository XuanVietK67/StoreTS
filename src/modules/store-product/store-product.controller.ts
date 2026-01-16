import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreateStoreProductDto } from 'src/modules/store-product/dto/create-store-product.dto';
import { UpdateStoreProductDto } from 'src/modules/store-product/dto/update-store-product.dto';
import { StoreProductService } from 'src/modules/store-product/store-product.service';
import { FindStoreQueryDto } from 'src/modules/store/dto/update-store.dto';

@Controller('store-product')
export class StoreProductController {
  constructor(private readonly storeProductService: StoreProductService) {}

  @Post('add_product')
  create(@Body() createStoreProductDto: CreateStoreProductDto) {
    return this.storeProductService.create(createStoreProductDto);
  }

  @Get(':storeId/products')
  findAll(@Param('storeId') storeId: string, @Query() query: FindStoreQueryDto) {
    return this.storeProductService.findAllProductsByStore(storeId, query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreProductDto: UpdateStoreProductDto) {
    return this.storeProductService.update(+id, updateStoreProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeProductService.remove(+id);
  }
}
