import { Indentifiable } from "./indentifiable";

export class OrderStatistics implements Indentifiable {
  id: number;
  totalRevenue = 0;
  totalCost = 0;
  netIncome = 0;
}
