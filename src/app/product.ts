import { ProductStatus } from './product-status.enum';
import { Inventory } from './inventory';
import { Indentifiable } from './indentifiable';

export class Product implements Indentifiable {
  id: number;
  images: string[];
  name: string;
  price: number;
  discount: number;
  inventories: any;
  status: ProductStatus;
}
