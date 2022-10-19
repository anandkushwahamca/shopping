import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsDocuments } from '../products/products.model';
import { MESSAGES } from '../common/constans/constans';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocuments } from './order.model';

@Injectable()
export class OrderService {
  logger = new Logger(OrderService.name);
  constructor(
    @InjectModel(Order.name)
    private readonly OrderModel: Model<OrderDocuments>,
    @InjectModel(Products.name)
    private readonly ProductsModel: Model<ProductsDocuments>,
  ) {}

  async getAllOrders(): Promise<OrderDto[] | object> {
    const orders = await this.OrderModel.find()
      .select('products quantity')
      .populate('products', 'productName')
      .exec();
    if (orders.length) {
      return orders;
    } else {
      this.logger.warn(MESSAGES.ORDER_NOT_FOUND);
      throw new NotFoundException(MESSAGES.ORDER_NOT_FOUND);
    }
  }

  async createOrder({ products }: OrderDto): Promise<OrderDto | object> {
    const product = await this.ProductsModel.findById(products);
    console.log('product', product);
    if (!product) {
      this.logger.warn(MESSAGES.PRODUCT_NOT_FOUND);
      throw new NotFoundException(MESSAGES.PRODUCT_NOT_FOUND);
    } else {
      const order = await new this.OrderModel(product).save();
      if (order) {
        this.logger.log(MESSAGES.ORDER_ADDED_SUCCESS);
        return { message: MESSAGES.ORDER_ADDED_SUCCESS };
      } else {
        throw new NotFoundException(MESSAGES.ORDER_NOT_FOUND);
      }
    }
  }
}
