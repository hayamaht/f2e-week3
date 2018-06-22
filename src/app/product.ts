import { ProductStatus } from './product-status.enum';
import { Inventory } from './inventory';

export class Product {
  id: number;
  images: string[];
  name: string;
  price: number;
  discount: number;
  inventories: Inventory[];
  status: ProductStatus;
}
