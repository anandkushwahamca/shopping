import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('UsersService', () => {
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: ProductsService,
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

    productsService = module.get<ProductsService>(ProductsService);
  });

  it('productsService should be defined', () => {
    expect(productsService).toBeDefined();
  });
});
