import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

const order = {
  id: '12fghjk',
  products: {
    id: '12fghjk',
    productName: 'Clothe',
    price: 100,
    quantity: 30,
    description: 'this is for clothe',
  },
  quantity: 20,
};

describe('OrderService', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        OrderService,
        {
          provide: OrderService,
          useValue: {
            getAllOrders: jest.fn(() => []),
            createOrder: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    orderController = moduleRef.get<OrderController>(OrderController);
    orderService = moduleRef.get<OrderService>(OrderService);
  });

  it('orderController should be defined', () => {
    expect(orderController).toBeDefined();
    expect(orderController).not.toBeUndefined();
  });

  it('orderService should be defined', () => {
    expect(orderService).toBeDefined();
    expect(orderService).not.toBeUndefined();
  });

  describe('When getAllOrders', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const getAllOrdersSpy = jest
          .spyOn(orderService, 'getAllOrders')
          .mockResolvedValue([order]);
        const res = await orderController.getAllOrders();
        expect(res).toEqual([order]);
        expect(getAllOrdersSpy).toHaveBeenCalled();
        expect(getAllOrdersSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is no data', () => {
      it('should return correct data', async () => {
        const getAllOrdersSpy = jest
          .spyOn(orderService, 'getAllOrders')
          .mockResolvedValue([]);
        const res = await orderController.getAllOrders();
        expect(res).toEqual([]);
        expect(getAllOrdersSpy).toHaveBeenCalled();
        expect(getAllOrdersSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
