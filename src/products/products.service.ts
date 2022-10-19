import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MESSAGES } from '../common/constans/constans';
import { ProductsDto } from './dto/products.dto';
import { Products, ProductsDocuments } from './products.model';

@Injectable()
export class ProductsService {
  logger = new Logger(ProductsService.name);
  constructor(
    @InjectModel(Products.name)
    private readonly productsModel: Model<ProductsDocuments>,
  ) {}

  async getAllProducts(): Promise<ProductsDto[]> {
    const products = await this.productsModel
      .find()
      .select('productName price quantity description')
      .exec();
    if (products.length) {
      return products;
    } else {
      this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
      throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
    }
  }

  async getProductById(productId: string): Promise<ProductsDto | object> {
    const product = await this.productsModel
      .findById(productId)
      .select('productName price quantity description')
      .exec();
    if (product) {
      return product;
    } else {
      this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
      throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
    }
  }

  async createProduct(productsDto: ProductsDto): Promise<ProductsDto | object> {
    try {
      const product = await new this.productsModel(productsDto).save();
      if (product) {
        this.logger.log(MESSAGES.PRODUCT_ADDED_SUCCESS);
        return { message: MESSAGES.PRODUCT_ADDED_SUCCESS };
      } else {
        throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
      }
    } catch (error) {
      this.logger.error(error.message);
      if (error?.code === MESSAGES.CODE_ALREADY_EXIST) {
        throw new ConflictException(MESSAGES.PRODUCT_NAME_EXIST);
      } else if (error?.code === MESSAGES.CODE_NOT_NULL) {
        throw new NotAcceptableException(MESSAGES.PRODUCT_NOT_NULL);
      } else {
        throw new BadRequestException();
      }
    }
  }

  async updateProduct(
    id: string,
    productsDto: ProductsDto,
  ): Promise<ProductsDto | object> {
    const productInfo = await this.productsModel.findByIdAndUpdate(
      id,
      productsDto,
    );
    if (productInfo) {
      return { message: MESSAGES.UPDATE_SUCCESS };
    } else {
      this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
      throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
    }
  }

  async deleteProduct(productId: string): Promise<ProductsDto | object> {
    const product = await this.productsModel.findById(productId);
    if (product?._id) {
      const deleteProduct = await this.productsModel
        .remove({ _id: product?._id })
        .exec();
      if (deleteProduct?.deletedCount) {
        return { message: MESSAGES.DELETE_SUCCESS };
      } else {
        this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
        throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
      }
    } else {
      this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
      throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
    }
  }
}
