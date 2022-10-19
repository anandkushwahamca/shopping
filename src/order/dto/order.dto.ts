import { Products } from '../../products/products.model';

export class OrderDto {
  _id?: string;

  products: Products;

  quantity: number;
}
