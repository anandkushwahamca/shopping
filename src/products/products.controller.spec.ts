import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

const product = {
  id: '12fghjk',
  productName: 'Clothe',
  price: 100,
  quantity: 30,
  description: 'this is for clothe',
};

describe('ProductsService', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: ProductsService,
          useValue: {
            getAllProducts: jest.fn(() => []),
            getProductById: jest.fn(() => []),
            createProduct: jest.fn(() => []),
            updateProduct: jest.fn(() => []),
            deleteProduct: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    productsController = moduleRef.get<ProductsController>(ProductsController);
    productsService = moduleRef.get<ProductsService>(ProductsService);
  });

  it('productsController should be defined', () => {
    expect(productsController).toBeDefined();
    expect(productsController).not.toBeUndefined();
  });

  it('productsService should be defined', () => {
    expect(productsService).toBeDefined();
    expect(productsService).not.toBeUndefined();
  });

  describe('When getAllProducts', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const getAllProductsSpy = jest
          .spyOn(productsService, 'getAllProducts')
          .mockResolvedValue([product]);
        const res = await productsController.getAllProducts();
        expect(res).toEqual([product]);
        expect(getAllProductsSpy).toHaveBeenCalled();
        expect(getAllProductsSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is no data', () => {
      it('should return correct data', async () => {
        const getAllProductsSpy = jest
          .spyOn(productsService, 'getAllProducts')
          .mockResolvedValue([]);
        const res = await productsController.getAllProducts();
        expect(res).toEqual([]);
        expect(getAllProductsSpy).toHaveBeenCalled();
        expect(getAllProductsSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When getProductById(1)', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const getProductByIdSpy = jest
          .spyOn(productsService, 'getProductById')
          .mockResolvedValue([product]);
        const res = await productsController.getProductById(product.id);
        expect(res).toEqual([product]);
        expect(getProductByIdSpy).toHaveBeenCalled();
        expect(getProductByIdSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is no data', () => {
      it('should return correct data', async () => {
        const getProductByIdSpy = jest
          .spyOn(productsService, 'getProductById')
          .mockResolvedValue([]);
        const res = await productsController.getProductById(product.id);
        expect(res).toEqual([]);
        expect(getProductByIdSpy).toHaveBeenCalled();
        expect(getProductByIdSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When createProduct', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const createProductSpy = jest
          .spyOn(productsService, 'createProduct')
          .mockResolvedValue([product]);
        const res = await productsController.createProduct(product);
        expect(res).toEqual([product]);
        expect(createProductSpy).toHaveBeenCalled();
        expect(createProductSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When updateProduct', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const updateProductSpy = jest
          .spyOn(productsService, 'updateProduct')
          .mockResolvedValue([product]);
        const res = await productsController.updateProduct(product.id, product);
        expect(res).toEqual([product]);
        expect(updateProductSpy).toHaveBeenCalled();
        expect(updateProductSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When deleteProduct(1)', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const deleteProductSpy = jest
          .spyOn(productsService, 'deleteProduct')
          .mockResolvedValue([product]);
        const res = await productsController.deleteProduct(product.id);
        expect(res).toEqual([product]);
        expect(deleteProductSpy).toHaveBeenCalled();
        expect(deleteProductSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is no data', () => {
      it('should return correct data', async () => {
        const deleteProductSpy = jest
          .spyOn(productsService, 'deleteProduct')
          .mockResolvedValue([product]);
        const res = await productsController.deleteProduct(product.id);
        expect(res).toEqual([product]);
        expect(deleteProductSpy).toHaveBeenCalled();
        expect(deleteProductSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
