
import { OrderProduct } from './order-product';
import { OrderStatus } from './order-status.enum';

export class Order {
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
