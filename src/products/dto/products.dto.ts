import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class ProductsDto {
  _id?: string;

  @IsString({ message: 'Product name must be String' })
  @IsNotEmpty({ message: 'Product name can not empty' })
  productName: string;

  @IsNotEmpty({ message: 'Price can not empty' })
  @IsInt({ message: 'Price must be number' })
  price: number;

  @IsNotEmpty({ message: 'Quantity can not empty' })
  @IsInt({ message: 'Quantity must be number' })
  quantity: number;

  description: string;
}
