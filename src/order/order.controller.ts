import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllOrders(): Promise<OrderDto[] | object> {
    return this.orderService.getAllOrders();
  }

  @Post()
  async createOrder(@Body() orderDto: OrderDto): Promise<OrderDto | object> {
    return await this.orderService.createOrder(orderDto);
  }
}
