import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';

describe('UsersService', () => {
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: OrderService,
          useFactory: () => ({
            find: jest.fn(() => []),
            findById: jest.fn(() => []),
            save: jest.fn(() => []),
            findOne: jest.fn(() => []),
            findByIdAndUpdate: jest.fn(() => []),
            remove: jest.fn(() => []),
          }),
        },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
  });

  it('orderService should be defined', () => {
    expect(orderService).toBeDefined();
  });
});
