import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Role } from '../common/enum/role.enum';
import { Roles } from '../common/decorators/roles.decorator';
import { ProductsDto } from './dto/products.dto';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role-guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<ProductsDto[] | object> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<ProductsDto | object> {
    return await this.productsService.getProductById(id);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async createProduct(
    @Body() productsDto: ProductsDto,
  ): Promise<ProductsDto | object> {
    return await this.productsService.createProduct(productsDto);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productsDto: ProductsDto,
  ): Promise<ProductsDto | object> {
    return await this.productsService.updateProduct(id, productsDto);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<ProductsDto | object> {
    return await this.productsService.deleteProduct(id);
  }
}
