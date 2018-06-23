
import { OrderProduct } from './order-product';
import { OrderStatus } from './order-status.enum';
import { Indentifiable } from './indentifiable';

export class Order implements Indentifiable {
  id: number;
  customer: string;
  products: OrderProduct[];
  total: number;
  addedAt: Date;
  checkoutedAt: Date;
  phone: string;
  email: string;
  address: string;
  status: OrderStatus;
}
